<div id="particle-div"></div>
<div class="inner" id="home">
  <h1>Tanner Peck</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a nostrum nulla id maxime, possimus, reprehenderit odit qui dolore praesentium ullam ad necessitatibus eius. Ea rem enim nobis cumque voluptates.</p>
</div>

<style lang="scss">
  #home {
    height: 100vh;

    padding: 0 8rem; 

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h1 {
      font-size: clamp(5.625rem, 4.773rem + 3.64vw, 7.5rem);
      font-weight: 300;
      margin-bottom: 0%;
    }
  }

  #particle-div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
