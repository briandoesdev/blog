<svelte:head>
  <title>home | @briandoesdev</title>
</svelte:head>

<style>
  .posts {
    list-style-type: none;
    margin: 2rem 0;
    padding: 0.1rem;
  }

  .posts li {
    padding: .500rem 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  .posts a {
    font-size: 1em;
  }
</style>

<script context="module">
  import { gql, GraphQLClient } from 'graphql-request'
  import { GRAPHCMS_URL } from '$lib/env';

  export async function load() {
    // https://github.com/vitejs/vite/issues/3176
    // solution? https://blog.hdks.org/Environment-Variables-in-SvelteKit-and-Vercel/
    const graphcms = new GraphQLClient(
      GRAPHCMS_URL,
      {
        headers: { "gcms-stage": "PUBLISHED" },
      }
    )

    const query = gql`
    query PostsQuery {
      posts(orderBy: postCreatedAt_ASC) {
        title
        postCreatedAt
        urlSlug
        publishedBy {
          name
          picture
        }
      }
    }
    `

    const { posts } = await graphcms.request(query)

    return {
      props: {
        posts,
      },
    }
  }
</script>

<script>
// @ts-nocheck

  export /**
* @type {any}
*/
   let posts
</script>

<main>
  <ul class="posts">
    {#each posts as post}
    <li>
      <a href="/blog/post/{post.urlSlug}">{post.title} | {post.publishedBy.name}</a>
      <p>{post.postCreatedAt}</p>
    </li>
    {/each}
  </ul>
</main>


