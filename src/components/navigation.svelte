<script>
	import { npm_config_engine_strict } from './../../.svelte-kit/ambient.d.ts';
  import { page } from '$app/stores';
  import {writable} from 'svelte/store';
  let pageUrl = $page.url.href.split('/');
  let pageHref = pageUrl[pageUrl.length - 1];
</script>

<img src="./tanner-peck-logo.svg" alt="Tanner Peck" class="logo">
<nav aria-label="Primary" class="site-nav">
  <ul>
    <li class={pageHref === '#home' ? 'active': ' '}><a href="#home">Home</a></li> 
    <li class={pageHref === '#about' ? 'active': ' '}><a href="#about">About</a></li>
    <li class={pageHref === '#portfolio' ? 'active': ' '}><a href="#portfolio">Portfolio</a></li>
    <li class={pageHref === '#contact' ? 'active': ' '}><a href="#contact">Contact</a></li> 
  </ul>
</nav>

<style lang="scss">
  .site-nav {
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;

    grid-row: 2 / 3;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;

      padding-left: 0;
      margin: 5rem 0 0;

      list-style-type: none;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        flex: 1;

        margin-left:  -2.5rem;
        margin-right: -2.5rem;
      }

      a {
        height: 100%;
        flex: 1;

        text-decoration: none;
        color: var(--clr-white);

        text-align: center;
      }
    }
  }

  .logo {
    width: 75%;

    grid-row: 1 / 2;

    margin-top: 2rem;
  }
</style>