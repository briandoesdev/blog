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
    const graphcms = new GraphQLClient(
      import.meta.env.VITE_GRAPHCMS_URL,
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


