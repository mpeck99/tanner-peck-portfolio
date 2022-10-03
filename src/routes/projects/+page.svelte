<!-- src/routes/projects/+page.svelte -->
<script>
	export let data;
</script>

<h1>My Work</h1>

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
		height: 20rem;
		width: 20rem;

		position: relative;

		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		box-shadow: var(--shadow);

    cursor: pointer;
		&:hover,
		&:focus {
			.inner {
				opacity: 1;

				animation: shiftup 1s ease-in-out;
				transform-origin: bottom right;
			}
		}

		.inner {
			height: 100%;
			width: 100%;

			opacity: 0;

			position: relative;

			z-index: 0;

			&::after {
				content: '';

				width: 100%;
				height: 100%;

				display: block;
				opacity: 1;

				position: absolute;
				bottom: 0;
				background-color: var(--clr-gold);
			}
		}

		h2 {
			height: 100%;
			width: 100%;

			display: flex;
			justify-content: center;
			align-items: center;

			margin: 0;

			font-size: 2rem;

			a {
				height: 100%;

				flex: 1 0 100%;

				display: flex;
				justify-content: center;
				align-items: center;

				text-decoration: none;

				z-index: 2;

				&:visited {
					color: var(--clr-black);
				}
			}
		}
	}

	@keyframes shiftup {
		0% {
			display: block;
			height: 0%;
		}
		100% {
			height: 100%;
			opacity: 1;
		}
	}
</style>
