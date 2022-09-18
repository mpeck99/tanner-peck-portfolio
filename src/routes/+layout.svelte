<script>
  import Navigation from "../components/navigation.svelte";
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons"
    );
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
    --ff-head: 'Ubuntu Mono', monospace;
    --ff-body: 'Courier New', Courier, monospace;
   
    --clr-black: hsl(345, 6%, 13%);
    --clr-greyD: hsl(330, 2%, 18%);
    --clr-greyL: hsl(330, 2%, 56%);
    --clr-goldD: hsl(46, 98%, 32%);
    --clr-gold: hsl(45, 98%, 40%);
    --clr-white: hsl(0, 33%, 99%);

    --shadow-color: 0deg 0% 0%;
  }
  :global(body) {
    min-height: 100vh;

    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 100%;

    margin: 0;

    position: relative;

    font-family: var(--ff-body);
    font-size: 22px;

    background: var(--clr-black);
    color: var(--clr-white);

    :global(p) {
      line-height: 2;
    }
  }

  :global(h1, h2, h3, h4, h5, h6){
    font-family: var(--ff-head);
  }

  :global(section){
    height: 100vh;
  }

  header {
    height: 100vh;
    display: grid;
    grid-template-columns: 10rem 1fr;
    grid-template-rows: auto 1fr;
    justify-items: center;
    align-items: flex-start;

    padding: 0rem;
    
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    position: fixed;
    top: 0;

    background: transparent;

    z-index: 1;
  }

  main {
    padding: 0 3rem;

    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
</style>
