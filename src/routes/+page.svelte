<script>
	// import Projects from '../components/projects.svelte';
</script>

<svelte:head>
	<title>Tanner Peck</title>
</svelte:head>

<section id="home" aria-labelledby="home-heading">
	<div class="inner">
		<h1 id="home-heading">Tanner Peck</h1>
		<p>
			Lorem Ipsum is FAKE TEXT! I will write some great placeholder text – and nobody writes better
			placeholder text than me, believe me – and I’ll write it very inexpensively. I will write some
			great, great text on your website’s Southern border, and I will make Google pay for that text.
			Mark my words. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you
			know, shot..
		</p>
	</div>
	<p />
</section>
<section id="about" aria-labelledby="about-heading">
	<h2 id="about-heading">About</h2>
	<div class="inner">
		<div class="headshot">
			<img src="./images/user-placeholder.webp" alt="Tanner Peck" />
		</div>
		<div class="content">
			<p>
				I have a 10 year old son. He has words. He is so good with these words it's unbelievable. We
				are going to make placeholder text great again. Greater than ever before. The best taco
				bowls are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is the single greatest
				threat. We are not - we are not keeping up with other websites.
			</p>
			<p>
				I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it
				was. It could be Russia, but it could also be China. It could also be lots of other people.
				It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? I don't
				think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It
				could be Russia, but it could also be China. It could also be lots of other people. It also
				could be some wordsmith sitting on their bed that weights 400 pounds. Ok? We have so many
				things that we have to do better... and certainly ipsum is one of them. Some people have an
				ability to write placeholder text... It's an art you're basically born with. You either have
				it or you don't.
			</p>
		</div>
	</div>
</section>
<section id="contact" aria-labelledby="contact-heading">
	<h2 id="contact-heading">Contact</h2>
	<div class="inner">
		<div class="callout-wrapper">
			<div class="callout">
				<svg xmlns="http://www.w3.org/2000/svg" class="callout-icn" viewBox="0 0 448 512"
					><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path
						d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
					/></svg
				>
				<a href="#linkedin">LinkedIn link goes here</a>
			</div>
			<div class="callout">
				<span class="material-symbols-outlined callout-icn"> description </span>
				<a href="#resume">Resume link goes here</a>
			</div>
			<div class="callout">
				<span class="material-symbols-outlined callout-icn"> alternate_email </span>
				<a href="#email">Email link goes here</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../static/css/mixins.scss';

	#home {
		padding: 0 clamp(1.375rem, 0.636rem + 3.15vw, 3rem);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		text-align: center;

		h1 {
			margin-bottom: 0%;

			color: var(--clr-goldD);
			font-size: clamp(5.625rem, 4.773rem + 3.64vw, 10rem);
			font-weight: 300;
		}
	}

	#particle-div {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	#about {
		.inner {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;

			.content {
				order: 2;

				@include desktop {
					order: 1;
				}
			}

			@include desktop {
				flex-direction: row;
				flex-wrap: nowrap;
			}
		}

		.headshot {
			margin-left: 2rem;

			position: relative;

			order: 1;

			img {
				max-width: 20rem;
				height: auto;

				clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

				@include desktop {
					max-width: 30rem;
				}
			}

			&::after {
				content: '';

				width: 60%;
				height: 0.25rem;

				position: absolute;
				left: -10%;
				top: 20%;

				background: var(--clr-gold);
				transform: rotate(-45deg);
				transform-origin: center;
				z-index: -1;
			}

			&::before {
				content: '';

				width: 60%;
				height: 0.25rem;

				position: absolute;
				right: -10%;
				bottom: 20%;

				background: var(--clr-gold);
				transform: rotate(-45deg);
				transform-origin: center;
				z-index: -1;
			}

			&:hover,
			&:focus {
				transform: rotate(-2deg);
			}

			@include desktop {
				order: 2;
			}
		}
	}

	.project-wrapper {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.callout-wrapper {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;

		padding: 4rem 0;
		margin-bottom: 3rem;
	}

	.callout {
		width: 13rem;
		height: 13rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		position: relative;

		background: var(--clr-greyD);

		padding: 3rem;

		.callout-icn {
			width: 12rem;

			position: absolute;

			opacity: 0.1;

			pointer-events: none;

			font-size: 12rem;
			fill: var(--clr-white);
			color: var(--clr-white);

			&.material-symbols-outlined {
				margin-left: -1rem;
			}
		}

		a {
			font-weight: 700;
			font-size: 1.75rem;
		}

		&:after {
			content: '';

			width: 18.5rem;
			height: 18.5rem;

			display: none;

			position: absolute;

			z-index: -1;

			transform: rotate(-45deg);

			background-color: var(--clr-goldD);
		}

		&:hover,
		&:focus {
			&:after {
				display: block;

				animation: rotateIn 0.2s ease-in-out;
			}
		}
	}

	#contact {
		min-height: 50vh;
	}

	@keyframes rotateIn {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(45deg);
		}
	}

	@keyframes rotateOut {
		0% {
			transform: rotate(45deg);
		}
		100% {
			transform: rotate(45deg);
		}
	}
</style>
