<script context="module">
  // @ts-nocheck
  export const prerender = false;

  import { gql, GraphQLClient } from 'graphql-request'

  export async function load({ params }) {
    const postSlug = params.slug;
    console.log(`slug: ${postSlug}`)
    const graphcms = new GraphQLClient(
      import.meta.env.VITE_GRAPHCMS_URL,
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
  export let post
</script>

<!-- <pre>{JSON.stringify(post, null, 2)}</pre> -->
<ul>
  <li>
    {#if post.postHeaderImage != null}
      <img src="{post.postHeaderImage.url}" alt="{post.title}" />
    {/if}
    <a href="/post/{post.slug}">{post.title}</a>
    <p>{post.disclaimer}</p>
    <p>{post.disclaimerType}</p>
    <p>{post.content}</p>
    {#each post.tags as tag}
    <p>#{tag}</p>
    {/each}
    <p>{post.postCreatedAt}</p>
    <p>{post.postModifiedAt}</p>
    <p>{post.urlSlug}</p>
  </li>
</ul>
