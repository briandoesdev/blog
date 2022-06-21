<style>
  * {
    margin: 0;
    padding: 0;
    line-height: 1.6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  :global(body) {
    background-color: #fafafa;
  }

  header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  header a {
    font-weight: inherit;
    line-height: inherit;
    color: black;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    text-underline-offset: .25rem;
  }

  .nav {
    padding-left: 0;
    margin-right: -.25rem;
    margin-bottom: 0;
    list-style: none;
  }

  .nav li {
    display: inline-block;
    padding: .25rem;
  }

  .home {
    max-width: 43.75rem;
    margin: auto;
  }
</style>

<div class="container">
  <div class="home">
    <header>
      <h3>
        <a href="/blog">@briandoesdev</a>
      </h3>
      
  
      <ul class="nav">
        <li><a href="https://github.com/briandoesdev">github</a></li>
        <li><a href="https://twitter.com/briandoesdev">twitter</a></li>
      </ul>
    </header>

    <slot></slot>
  </div>
</div>