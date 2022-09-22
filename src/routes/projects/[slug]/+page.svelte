<!-- src/routes/[slug]/+page.svelte -->
<script>
  export let data;
  console.log(data.img)
</script>

<article>
  <div class="inner">
    <h2>{ data.title }</h2>
    <svelte:component this={data.content} />
  </div>
</article>

<style>
  article {

  }
</style>