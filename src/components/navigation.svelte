<script>
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	let pageUrl = $page.url.href.split('/');
	let pageHref = pageUrl[pageUrl.length - 1];

	let menu = { open: false, close: false };

	function toggleMenu() {
		menu.open = !menu.open;
	}
</script>

<a href="/" class="logo" aria-label="Tanner Peck Logo">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 395 425"
		overflow="visible"
		aria-hidden="true"
		><defs>
			<style>
				.cls-1 {
					fill: none;
					stroke: #a27c02;
					stroke-width: 5px;
				}
				.cls-1,
				.cls-2 {
					fill-rule: evenodd;
				}
				.cls-2 {
					fill: #fff;
				}
			</style>
		</defs><path
			class="cls-1 path-1"
			d="M196.493,33.253L390.716,226.524,197.444,420.747,3.222,227.476Z"
		/><path class="cls-1 path-2" d="M3.7,197.99L196.912,3.7,391.2,196.912,197.99,391.2Z" /><path
			id="TP"
			class="cls-2"
			d="M118.667,174.348h28.5v94.5h14.55v-94.5h29.1V160.4H118.667v13.95Zm95.25-13.95v108.45h14.549V229.1h16.05q9.9,0,16.8-3.075a30.839,30.839,0,0,0,11.175-8.1,31.914,31.914,0,0,0,6.225-11.25A42.184,42.184,0,0,0,280.667,194q0-10.648-4.576-18.15a29.649,29.649,0,0,0-12.975-11.475q-8.4-3.972-20.249-3.975h-28.95Zm14.549,54.45v-40.5h16.8a22.97,22.97,0,0,1,9.825,1.875,18.831,18.831,0,0,1,6.451,4.8,17.781,17.781,0,0,1,3.524,6.45,23.915,23.915,0,0,1,1.05,6.825,22.239,22.239,0,0,1-1.05,6.45,22.73,22.73,0,0,1-3.45,6.75,17.188,17.188,0,0,1-6.6,5.325,24.526,24.526,0,0,1-10.65,2.025h-15.9Z"
		/></svg
	>
</a>
<nav
	aria-label="Primary"
	class="site-nav {menu.open === true ? 'js-menu-open' : ''}"
>
	<button
		data-aria-title="hamburger-menu"
		data-aria-id="site-nav-status"
		aria-expanded="false"
		class="hamburger-menu {menu.open === true ? 'js-menu-open' : ''}"
		on:click={toggleMenu}
	>
		<span class="menu-bars">
			<span class="menu-bar" />
			<span class="menu-bar" />
			<span class="menu-bar" />
		</span>
		<span class="menu-text"> Menu </span>
	</button>
	<ul class="site-nav__menu">
		<li>
			<a href="./#home" class={pageHref === '#home' ? 'active' : ' '}>
				<span class="material-icons">home</span>
				<span class="site-nav__text">Home</span>
			</a>
		</li>
		<li>
			<a href="./#about" class={pageHref === '#about' ? 'active' : ' '}>
				<span class="material-icons"> info </span>
				<span class="site-nav__text">About</span>
			</a>
		</li>
		<li>
			<a href="/projects" class={$page.url.pathname === '/projects' ? 'active' : ' '}>
				<span class="material-icons"> work </span>
				<span class="site-nav__text">Work</span>
			</a>
		</li>
		<li>
			<a href="./#contact" class={pageHref === '#contact' ? 'active' : ' '}>
				<span class="material-icons"> mail </span>
				<span class="site-nav__text">Contact</span>
			</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	@import '../static/css/mixins.scss';

	.material-icons {
		font-size: 1.5rem;
		color: var(--clr-greyD);

		z-index: 2;

		@include desktop {
			color: var(--clr-goldD);
		}
	}

	.site-nav {
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		grid-row: 2 / 3;

		ul {
			height: 100%;
			width: 8rem;

			display: none;

			padding-left: 0;

			list-style-type: none;

			li {
				height: 6rem;

				display: flex;
				justify-content: center;
				align-items: center;

				&:hover,
				&:focus {
					background: var(--clr-greyD);
					@include desktop {
						background: transparent;
					}
				}
			}

			a {
				width: 100%;
				height: 100%;

				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				position: relative;

				text-decoration: none;
				color: var(--clr-white);
				text-align: center;
				font-size: 1rem;

				.site-nav__text {
					display: block;

					position: static;

					opacity: 1;

					@include desktop {
						padding: 0.5rem;

						position: absolute;
						top: -2rem;

						opacity: 0;

						background: var(--clr-goldD);
						color: var(--clr-greyD);

						box-shadow: var(--shadow);
					}
				}

				&::before {
					width: 100%;
					height: 100%;

					content: '';
					position: absolute;
					top: 0;
					left: 0;

					border: 0.1rem solid var(--clr-goldD);
					transition: all 0.3s ease-in-out;

					box-shadow: 0.4px 0.3px 0.4px hsl(var(--shadow-color) / 1),
						7px 6.6px 7.2px -5px hsl(var(--shadow-color) / 0.68);

					z-index: -1;
				}

				&::after {
					content: '';

					width: 100%;
					height: 100%;

					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;

					opacity: 0;

					background-color: var(--clr-goldD);
					box-shadow: 0.4px 0.3px 0.4px hsl(var(--shadow-color) / 1),
						7px 6.6px 7.2px -5px hsl(var(--shadow-color) / 0.68);

					transform: rotate(45deg);

					z-index: -1;
				}

				&:hover,
				&:focus {
					&::after {
						opacity: 1;
						transform: scale(1, 1);
						transition: all 0.25s ease-in-out;
					}

					&::before {
						opacity: 0;
						transform: scale(0.75, 0.75);
						transition: all 0.25s ease-in-out;
					}

					.material-icons {
						color: var(--clr-greyD);
					}

					.site-nav__text {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						opacity: 1;

						animation: none;

						top: -3.25rem;

						color: var(--clr-gold);

						&::after {
							content: '';
							width: 0;
							height: 0;

							position: absolute;
							bottom: -0.75rem;

							display: none;

							border-left: 0.5rem solid transparent;
							border-right: 0.5rem solid transparent;
							border-top: 0.75rem solid var(--clr-goldD);
						}

						@include desktop {
							animation: moveup 0.25s ease-in-out;

							color: var(--clr-black);

							&::after {
								display: block;
							}
						}
					}
				}

				&.active {
					&::before {
						transform: rotate(45deg);
						transition: all 0.25s ease-in-out;
					}
				}

				@include desktop {
					width: 4rem;
					height: 4rem;
				}
			}

			@include desktop {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
			}
		}

		&.js-menu-open {
			flex-direction: column;
		}
	}

	.hamburger-menu {
		width: 8rem;
		height: 7rem;

		display: block;

		position: fixed;
		right: 0;
		top: 0;

		border: none;
		background: transparent;

		cursor: pointer;

		.menu-bars {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			padding: 0 2.25rem;

			pointer-events: none;
		}

		.menu-bar {
			height: 0.15rem;
			width: 3rem;

			margin: 0.6rem 0 0 0;

			background: var(--clr-goldD);

			&:nth-child(2) {
				width: 2.5rem;

				align-self: flex-end;
			}

			&:last-child {
				margin-bottom: 1rem;
			}
		}

		.menu-text {
			font-size: 1rem;
			color: var(--clr-goldD);
		}

		&:hover,
		&:focus {
			background: var(--clr-gold);

			.menu-bar {
				background: var(--clr-black);
			}

			.menu-text {
				color: var(--clr-black);
			}
		}

		@include desktop {
			display: none;
		}

		&.js-menu-open {
			background-color: var(--clr-gold);

			.menu-bar {
				background-color: var(--clr-greyD);
			}

			.menu-text {
				color: var(--clr-greyD);
			}

			+ .site-nav__menu {
				width: 8rem;
				height: 20rem;

				display: flex;
				flex-direction: column;
				justify-content: space-evenly;

				position: fixed;
				right: 0;
				top: 5.6rem;

				background-color: var(--clr-gold);
				box-shadow: var(--shadow);

				animation: menuScale 0.5s ease-in-out;
				transform-origin: top;
				a {
					color: var(--clr-greyD);

					&::before {
						border: none;
						box-shadow: none;
						transform: none;
					}

					&:hover,
					&:focus {
						&::after {
							display: none;
						}

						.material-icons {
							color: var(--clr-goldD);
						}
					}
				}
			}
		}
	}

	.logo {
		text-align: center;

		&:hover,
		&:focus {
			.path-1 {
				transform: translateY(1rem);
				transition: all 0.75s ease-in-out;
			}
			.path-2 {
				transform: translateY(-1rem);
				transition: all 0.75s ease-in-out;
			}

			#TP {
				transform: scale(0.75);
				transition: all 0.25s ease-in-out;
				transform-origin: center;
			}
		}

		svg {
			width: 5rem;

			grid-row: 1 / 2;

			margin-top: 0;

			@include desktop {
				width: 75%;

				margin-top: 2rem;
			}
		}
	}

	@keyframes moveup {
		0% {
			top: -2rem;

			opacity: 0;
		}
		100% {
			top: -3.25rem;

			opacity: 1;
		}
	}

	@keyframes menuScale {
		0% {
			transform: scaleY(0);
		}
		80% {
			transform: scaleY(1.1);
		}
		100% {
			transform: scaleY(1);
		}
	}
</style>
