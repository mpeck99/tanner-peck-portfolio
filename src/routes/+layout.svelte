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
  
  header {
    font-family: 'Raleway';
  }
	
</style>
