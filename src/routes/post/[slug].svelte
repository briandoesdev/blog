<svelte:head>
  <title>{post.title} | @briandoesdev</title>
</svelte:head>

<style>
  .post-header-image {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }
</style>

<script context="module">
  // @ts-nocheck

  import { gql, GraphQLClient } from 'graphql-request'

  export async function load({ params }) {
    const postSlug = params.slug;
    console.log(`slug: ${postSlug}`)

    // hardcoding path to GraphCMS until vite learns how to handle env vars
    // https://github.com/vitejs/vite/issues/3176
    const graphcms = new GraphQLClient(
      "https://api-us-east-1.graphcms.com/v2/cl1h36zti4zsq01xfgq4m6f4c/master",
      {
        headers: {},
      }
    )

    const query = gql`
      query Post($postSlug: String!) {
        post(where: { urlSlug: $postSlug }) {
          postHeaderImage {
            url
          }
          title
          disclaimer
          disclaimerType
          content
          tags
          postCreatedAt
          postModifiedAt
          urlSlug
        }
      }
    `

    const variables = {
      postSlug: postSlug,
    }


    const { post } = await graphcms.request(query, variables)

    return {
      props: {
        post,
      },
    }
  }
</script>

<script>
// @ts-nocheck

  import SvelteMarkdown from 'svelte-markdown';
  export let post;

</script>

<main>
  <div class="post-header">
    <h2>{post.title}</h2>
    <p>Posted: {post.postCreatedAt}</p>
    {#if post.postHeaderImage != null}
      <img class="post-header-image" src="{post.postHeaderImage.url}" alt="{post.title}" />
    {/if}

    
  </div>

  <div class="post-content">
    <SvelteMarkdown source={post.content}/>
  </div>

  <div class="post-footer">
    <div class="post-tags">
      <h5>Tags:</h5>
      {#each post.tags as tag}
      <p>#{tag}</p>
      {/each}
    </div>
  </div>
</main>
