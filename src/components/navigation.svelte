<script>
	import { npm_config_engine_strict } from './../../.svelte-kit/ambient.d.ts';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	let pageUrl = $page.url.href.split('/');
	let pageHref = pageUrl[pageUrl.length - 1];
</script>

<a href="/" class="logo">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395 425" overflow="visible">
		<defs>
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
		</defs>
		<path class="cls-1 path-1" d="M196.493,33.253L390.716,226.524,197.444,420.747,3.222,227.476Z" />
		<path class="cls-1 path-2" d="M3.7,197.99L196.912,3.7,391.2,196.912,197.99,391.2Z" />
		<path
			id="TP"
			class="cls-2"
			d="M118.667,174.348h28.5v94.5h14.55v-94.5h29.1V160.4H118.667v13.95Zm95.25-13.95v108.45h14.549V229.1h16.05q9.9,0,16.8-3.075a30.839,30.839,0,0,0,11.175-8.1,31.914,31.914,0,0,0,6.225-11.25A42.184,42.184,0,0,0,280.667,194q0-10.648-4.576-18.15a29.649,29.649,0,0,0-12.975-11.475q-8.4-3.972-20.249-3.975h-28.95Zm14.549,54.45v-40.5h16.8a22.97,22.97,0,0,1,9.825,1.875,18.831,18.831,0,0,1,6.451,4.8,17.781,17.781,0,0,1,3.524,6.45,23.915,23.915,0,0,1,1.05,6.825,22.239,22.239,0,0,1-1.05,6.45,22.73,22.73,0,0,1-3.45,6.75,17.188,17.188,0,0,1-6.6,5.325,24.526,24.526,0,0,1-10.65,2.025h-15.9Z"
		/>
	</svg>
</a>
<nav aria-label="Primary" class="site-nav">
	<ul>
		<li class={pageHref === '#home' ? 'active' : ' '}><a href="#home">Home</a></li>
		<li class={pageHref === '#about' ? 'active' : ' '}><a href="#about">About</a></li>
		<li class={pageHref === '#portfolio' ? 'active' : ' '}><a href="#portfolio">Portfolio</a></li>
		<li class={pageHref === '#contact' ? 'active' : ' '}><a href="#contact">Contact</a></li>
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

				margin-left: -2.5rem;
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
    text-align: center;
		svg {
			width: 75%;

			grid-row: 1 / 2;

			margin-top: 2rem;

			&:hover,
			&:focus {
				.path-1 {
					transform: translateY(1rem);
				}
				.path-2 {
					transform: translateY(-1rem);
				}

				#TP {
					transform: scale(0.75);
					transform-origin: center;
				}
			}
		}
	}
</style>
