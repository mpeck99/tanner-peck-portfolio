<script>
  import Navigation from "../components/navigation.svelte";
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
  </style>
</svelte:head>

<header>
  <Navigation />
</header>

<main class="main" id="main">
  <slot />
</main>

<footer>
  <p>Footer content will go here some day</p>
</footer>

<style>
  
  :global(body) {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 1fr auto;
  }

  header {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  main {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  footer {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
	
</style>
