<svelte:head>
    <title>Tanner Peck</title>
</svelte:head>
<script>
	// import Projects from '../components/projects.svelte';

</script>

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
				are going to make placeholder text great again. Greater than ever before. The best taco bowls
				are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is the single greatest threat. We
				are not - we are not keeping up with other websites.
			</p>
			<p>
				I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it
				was. It could be Russia, but it could also be China. It could also be lots of other people. It
				also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? I don't think
				anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could
				be Russia, but it could also be China. It could also be lots of other people. It also could be
				some wordsmith sitting on their bed that weights 400 pounds. Ok? We have so many things that
				we have to do better... and certainly ipsum is one of them. Some people have an ability to
				write placeholder text... It's an art you're basically born with. You either have it or you
				don't.
			</p>
		</div>
	</div>
</section>
<section id="contact" aria-labelledby="contact-heading">
	<h2 id="contact-heading">Contact</h2>
	<div class="inner">
		<p>
			I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it
			was. It could be Russia, but it could also be China. It could also be lots of other people. It
			also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? I’m the best
			thing that ever happened to placeholder text. Lorem Ipsum is unattractive, both inside and
			out. I fully understand why it’s former users left it for something else. They made a good
			decision.
		</p>
		<p>
			I have a 10 year old son. He has words. He is so good with these words it's unbelievable. We
			are going to make placeholder text great again. Greater than ever before. The best taco bowls
			are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is the single greatest threat. We
			are not - we are not keeping up with other websites.
		</p>
		<p>
			I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it
			was. It could be Russia, but it could also be China. It could also be lots of other people. It
			also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? I don't think
			anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could
			be Russia, but it could also be China. It could also be lots of other people. It also could be
			some wordsmith sitting on their bed that weights 400 pounds. Ok? We have so many things that
			we have to do better... and certainly ipsum is one of them. Some people have an ability to
			write placeholder text... It's an art you're basically born with. You either have it or you
			don't.
		</p>
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
</style>
