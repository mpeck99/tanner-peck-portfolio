<!-- src/routes/projects/+page.svelte -->
<script>
  export let data
</script>
  
  <h1>Projects</h1>
    
  <div class="article-wrapper">
    {#each data.posts as post}
      <article class="article" style="background-image: url('{post.meta.img}');">
        <div class="inner">
          <h2>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </h2>
        </div>
      </article>
    {/each}
  </div>

  <style lang="scss">
    .article-wrapper {
      display: flex;
    }
    .article {
      height: 30rem;
      width: 30rem;

      position: relative;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      box-shadow: var(--shadow);


      .inner {
        height: 100%;
        width: 100%;

        position: relative;

        &::after {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          
        }
      }

      h2 {
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;

        a {
          height: 100%;

          flex: 1 0 100%;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    @keyframes shiftup {
      0% {
        top: 150%;
        opacity: 1;
      }
      100% {
        top: 10%;
      }

    }
  </style>