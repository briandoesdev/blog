<style>
  * {
    margin: 0;
    padding: 2rem;
    line-height: 1.6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  :global(header) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: .5rem;
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  :global(header a) {
    font-weight: inherit;
    line-height: inherit;
    color: black;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    text-underline-offset: .25rem;
  }

  :global(.nav) {
    padding-left: 0;
    margin-right: -.25rem;
    margin-bottom: 0;
    list-style: none;
  }

  :global(.nav li) {
    display: inline-block;
    padding: .25rem;
  }

</style>

<div class="container">
  <slot></slot>
</div>