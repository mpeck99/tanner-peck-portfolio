<!-- src/routes/projects/+page.svelte -->
<script>
  export let data
</script>
  
  <h1>Projects</h1>
    
  <ul class="article-wrapper">
    {#each data.posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>