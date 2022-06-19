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

  export async function load() {
    // hardcoding path to GraphCMS until vite learns how to handle env vars
    // https://github.com/vitejs/vite/issues/3176
    const graphcms = new GraphQLClient(
      "https://api-us-east-1.graphcms.com/v2/cl1h36zti4zsq01xfgq4m6f4c/master",
      {
        headers: {},
      }
    )

    const query = gql`
      query PostsIndex {
        posts {
          title
          postCreatedAt
          urlSlug
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
      <a href="/post/{post.urlSlug}">{post.title}</a>
      <p>{post.postCreatedAt}</p>
    </li>
    {/each}
  </ul>
</main>


