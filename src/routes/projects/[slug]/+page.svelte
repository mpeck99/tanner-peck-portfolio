<!-- src/routes/[slug]/+page.svelte -->
<script>
  export let data;
</script>

<article>
  <div class="inner">
    <h2>{ data.title }</h2>
    <svelte:component this={data.content} />
  </div>
</article>

<style lange="scss">
  
</style>