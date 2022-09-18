<script>
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
		<li>
			<a href="#home" class={pageHref === '#home' ? 'active' : ' '}>
				<span class="material-icons">home</span>
				<!-- Home -->
			</a>
		</li>
		<li>
			<a href="#about" class={pageHref === '#about' ? 'active' : ' '}>
				<span class="material-icons"> info </span>
				<!-- About -->
			</a>
		</li>
		<li>
			<a href="#portfolio" class={pageHref === '#portfolio' ? 'active' : ' '}>
				<span class="material-icons"> work </span>
				<!-- Work -->
			</a>
		</li>
		<li>
			<a href="#contact" class={pageHref === '#contact' ? 'active' : ' '}>
				<span class="material-icons"> mail </span>
				<!-- Contact -->
			</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	.material-icons {
		font-size: 1.5rem;
		color: var(--clr-goldD);

		z-index: 2;
	}

	.site-nav {
		height: 100%;
		width: 100%;
		display: flex;
		flex: 1;

		grid-row: 2 / 3;

		ul {
			width: 100%;

			display: flex;
			flex-direction: column;
			justify-content: space-around;

			padding-left: 0;

			list-style-type: none;

			li {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			a {
				width: 4rem;
				height: 4rem;

				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				position: relative;

				text-decoration: none;
				color: var(--clr-white);
				text-align: center;
				font-size: 1rem;

				transition: all 0.5s ease-in-out; 

				

				&::before {
					width: 100%;
					height: 100%;

					content: '';
					position: absolute;
					top: 0;
					left: 0;

          border: 0.1rem solid var(--clr-goldD);
					transform: scale(1.2, 1.2);
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
						color: var(--clr-black);
						transition: all 0.5s ease-in-out;  
					}
				}

				&.active {
					&::before {
						transform: rotate(45deg) ;
            transition: all 0.25s ease-in-out;
					}
				}
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
		}
	}
</style>
