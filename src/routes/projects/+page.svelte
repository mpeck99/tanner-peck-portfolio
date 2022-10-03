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
	h1 {
		text-align: center;
		font-size: clamp(4rem, 3.773rem + 0.97vw, 4.5rem);
	}

	.article-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.article {
		height: 25rem;
		width: 25rem;

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

				animation: shiftup 0.5s ease-in-out;
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
				opacity: 0.95;

				position: absolute;
				bottom: 0;

				background: linear-gradient(-45deg, #a27c02, #2f2d2e);
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
				color: var(--clr-black);

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
