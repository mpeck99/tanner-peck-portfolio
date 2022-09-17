<img src="./tanner-peck-logo.svg" alt="Tanner Peck" class="logo">
<nav aria-label="Primary" class="site-nav">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Portfolio</li>
    <li>Contact</li>
  </ul>
</nav>

<style lang="scss">
  .site-nav {
    height: 100%;
    display: flex;
    flex: 1;

    grid-row: 2 / 3;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;

      padding-left: 0;

      list-style-type: none;
    }
  }

  .logo {
    width: 75%;

    grid-row: 1 / 2;
  }
</style>