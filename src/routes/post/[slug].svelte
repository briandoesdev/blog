<script context="module">
  // @ts-nocheck

  import { gql, GraphQLClient } from 'graphql-request'
  export const prerender = true;

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


    const { blogPost } = await graphcms.request(query, variables)
    console.log(`resp: ${blogPost}`)

    return {
      props: {
        blogPost,
      },
    }
  }
</script>

<script>
  // @ts-nocheck
  export let blogPost
</script>

<ul>
  <li>
    {#if blogPost.postHeaderImage != null}
      <img src="{blogPost.postHeaderImage.url}" alt="{blogPost.title}" />
    {/if}
    <a href="/post/{blogPost.slug}">{blogPost.title}</a>
    <p>{blogPost.disclaimer}</p>
    <p>{blogPost.disclaimerType}</p>
    <p>{blogPost.content}</p>
    {#each blogPost.tags as tag}
    <p>#{tag}</p>
    {/each}
    <p>{blogPost.postCreatedAt}</p>
    <p>{blogPost.postModifiedAt}</p>
    <p>{blogPost.urlSlug}</p>
  </li>
</ul>
