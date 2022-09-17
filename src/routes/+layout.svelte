<script>
  import Navigation from "../components/navigation.svelte";
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Open+Sans:wght@400;700&display=swap");
  </style>
</svelte:head>

<header>
  <Navigation />
</header>

<main class="main" id="main">
  <slot />
</main>

<style lang="scss">
  :global(:root){
   
    --ff-head: 'Josefin Sans', sans-serif;
    --ff-body: 'Open Sans', sans-serif;
   
    --clr-black: hsl(345, 6%, 13%);
    --clr-greyD: hsl(330, 2%, 18%);
    --clr-greyL: hsl(330, 2%, 56%);
    --clr-goldD: hsl(46, 98%, 32%);
    --clr-gold: hsl(45, 98%, 40%);
    --clr-white: hsl(0, 33%, 99%);
  }
  :global(body) {
    min-height: 100vh;

    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 100%;

    margin: 0;

    font-family: var(--ff-body);
    font-size: 22px;

    background: var(--clr-black);
    color: var(--clr-white);
  }

  :global(h1, h2, h3, h4, h5, h6){
    font-family: var(--ff-head);
  }

  header {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr;
    justify-items: center;
    align-items: flex-start;

    padding: 1rem;
    
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    background: var(--clr-greyD);
  }

  main {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

	
</style>
