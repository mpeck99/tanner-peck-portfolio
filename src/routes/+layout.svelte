<script>
	import Navigation from '../components/navigation.svelte';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
		@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
	</style>
</svelte:head>

<a class="bypass-link" href="#main">Skip to Content (Press Enter)</a>
<div
	role="region"
	aria-live="polite"
	class="sr-only"
	id="site-nav-status"
	aria-label="Navigation Status"
/>
<header aria-label="Site header">
	<Navigation />
</header>
<div id="particle" />
<main class="main" id="main" aria-label="Main Content">
	<slot />
</main>

<style lang="scss" global>
	@import '../static/css/mixins.scss';
	:root {
		--ff-head: 'Ubuntu Mono', monospace;
		--ff-body: 'Courier New', Courier, monospace;

		--clr-black: hsl(345, 6%, 13%);
		--clr-greyD: hsl(330, 2%, 18%);
		--clr-greyL: hsl(330, 2%, 56%);
		--clr-goldD: hsl(46, 98%, 32%);
		--clr-gold: hsl(45, 98%, 40%);
		--clr-white: hsl(0, 33%, 99%);

		--shadow-color: 0deg 0% 0%;
		--shadow: 0.4px 0.3px 0.4px hsl(var(--shadow-color) / 1),
			7px 6.6px 7.2px -5px hsl(var(--shadow-color) / 0.68);
	}

	body {
		min-height: 100vh;

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 10rem 1fr;

		margin: 0;

		position: relative;

		font-family: var(--ff-body);
		font-size: 22px;

		background: var(--clr-black);
		color: var(--clr-white);

		p {
			line-height: 2;
		}

		@include desktop {
			grid-template-columns: 10rem 1fr;
			grid-template-rows: 100%;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--ff-head);
		color: var(--clr-gold);
	}

	h2 {
		font-size: clamp(4rem, 3.773rem + 0.97vw, 4.5rem);
	}

	h3 {
		font-size: clamp(0rem, -1.818rem + 7.76vw, 4rem);
	}

	h4 {
		font-size: clamp(3rem, 2.773rem + 0.97vw, 3.5rem);
	}

	h5 {
		font-size: clamp(2.5rem, 2.273rem + 0.97vw, 3rem);
	}

	h6 {
		font-size: clamp(2rem, 1.773rem + 0.97vw, 2.5rem);
	}

	section {
		min-height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;

		&:first-child {
			margin-top: 0;
		}

		.inner {
			padding-right: 2rem;
		}
	}

	header {
		width: calc(100% - 4rem);
		height: 6rem;

		display: flex;
		grid-row: 1 / 2;
		grid-column: 1 / 2;
		padding: 0rem;
		justify-content: space-between;

		position: fixed;
		top: 0;

		padding: 1rem 2rem 0 2rem;

		background: var(--clr-greyD);

		z-index: 1;

		box-shadow: var(--shadow);

		@include desktop {
			height: 100vh;
			width: 10rem;

			display: grid;
			grid-template-columns: 10rem 1fr;
			grid-template-rows: auto 1fr;
			justify-items: center;
			align-items: flex-start;

			background: transparent;

			box-shadow: none;
		}
	}

	main {
		padding: 0 clamp(1.375rem, 0.636rem + 3.15vw, 3rem);

		grid-row: 2/3;
		grid-column: 1/2;

		@include desktop {
			grid-row: 1 / 2;
			grid-column: 2 / 3;
		}
	}

	#particle {
		height: 100%;
		width: 100%;
		
		position: fixed;
	}

	.bypass-link,
	.bypass-link:visited {
		width: 18rem;

		display: block;

		position: absolute;
		left: -1000em;

		padding: 0.25rem;

		background: var(--clr-greyD);

		color: var(--clr-white);
		font-weight: bold;
		text-decoration: none;

		overflow: hidden;

		&:hover,
		&:focus {
			left: 0;
			z-index: 5000;

			color: var(--clr-white);

			animation: bypass-slide 0.25s ease-in-out;
		}
	}

	@keyframes bypass-slide {
		0% {
			height: 0rem;
			top: -1rem;
		}
		100% {
			height: 3rem;
			top: 0;
		}
	}
</style>
