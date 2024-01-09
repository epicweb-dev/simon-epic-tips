import { animate, spring, stagger } from 'motion'
import { useEffect } from 'react'

function cx(...classNames: string[]) {
	return classNames.filter(Boolean).join(' ')
}

export default function MotionOneStagger() {
	useEffect(() => {
		const tiles = document.querySelectorAll('[data-tile]')
		animate(
			tiles,
			{
				opacity: [0, 1],
				x: [-20, 0],
				scale: [0.2, 1],
				rotate: [12, 0],
			},
			{
				easing: spring({
					damping: 15,
					stiffness: 200,
				}),
				delay: stagger(0.07, {
					start: 0.2,
					easing: 'ease-in',
				}),
			},
		)

		const group = [
			document.querySelector('[data-logo]'),
			document.querySelector('[data-heading]'),
			document.querySelector('[data-paragraph]'),
		] as HTMLElement[]

		animate(
			group,
			{
				opacity: [0, 1],
				x: [20, 0],
			},
			{
				duration: 0.3,
				delay: stagger(0.2, {
					start: 0.5,
					easing: 'ease-out',
				}),
				easing: 'ease-out',
			},
		)
	}, [])

	type Logo = {
		image: string
		href: string
		column: 1 | 2 | 3 | 4 | 5
		row: 1 | 2 | 3 | 4 | 5 | 6
	}

	const columnClasses: Record<Logo['column'], string> = {
		1: 'xl:col-start-1',
		2: 'xl:col-start-2',
		3: 'xl:col-start-3',
		4: 'xl:col-start-4',
		5: 'xl:col-start-5',
	}

	const rowClasses: Record<Logo['row'], string> = {
		1: 'xl:row-start-1',
		2: 'xl:row-start-2',
		3: 'xl:row-start-3',
		4: 'xl:row-start-4',
		5: 'xl:row-start-5',
		6: 'xl:row-start-6',
	}

	const logos = [
		{ column: 1, row: 1 },
		{ column: 1, row: 2 },
		{ column: 1, row: 3 },
		{ column: 2, row: 2 },
		{ column: 2, row: 3 },
		{ column: 2, row: 4 },
		{ column: 2, row: 5 },
		{ column: 2, row: 6 },
		{ column: 3, row: 3 },
		{ column: 3, row: 4 },
		{ column: 3, row: 5 },
		{ column: 4, row: 1 },
		{ column: 4, row: 2 },
		{ column: 4, row: 3 },
		{ column: 4, row: 4 },
		{ column: 4, row: 5 },
		{ column: 4, row: 6 },
		{ column: 5, row: 2 },
		{ column: 5, row: 3 },
		{ column: 5, row: 4 },
		{ column: 5, row: 5 },
	]

	return (
		<div className="font-poppins grid min-h-svh place-items-center bg-white dark:bg-black">
			<div className="grid place-items-center px-4 py-16 xl:grid-cols-2 xl:gap-24">
				<div className="xl:order-2">
					<div className="flex max-w-md flex-col items-center text-center xl:items-start xl:text-left">
						<svg
							data-logo
							className="size-20 text-black xl:-mt-4 dark:text-white"
							viewBox="0 0 92 92"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M55.8298 36.1702L52.3692 24.2922L92 0L67.6851 39.6308L55.8298 36.1702ZM36.1702 36.1702L39.6308 24.2922L0 0L24.3149 39.6308L36.1702 36.1702ZM55.8298 55.8298L52.3692 67.7078L92 92L67.6851 52.3692L55.8298 55.8298ZM36.1702 55.8298L39.6308 67.7078L0 92L24.3149 52.3692L36.1702 55.8298Z"
								fill="currentColor"
							></path>
						</svg>

						<h1
							data-heading
							className="mt-8 text-4xl font-medium text-black md:text-5xl xl:mt-4 xl:text-6xl dark:text-white"
						>
							The Epic Stack
						</h1>
						<p
							data-paragraph
							className="mt-6 text-xl/7 text-slate-700 dark:text-slate-400"
						>
							Check the{' '}
							<a className="underline hover:no-underline" href="#">
								Getting Started guide
							</a>
							file for how to get your project off the ground!
						</p>
					</div>
				</div>

				<ul className="mt-16 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4 xl:mt-0 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
					{logos.map((logo, index) => (
						<li
							key={index}
							data-tile
							className={cx(
								columnClasses[logo.column],
								rowClasses[logo.row],
								'grid size-20 place-items-center rounded-2xl bg-violet-100 p-4 transition hover:-rotate-6 hover:bg-violet-200 sm:size-24 dark:bg-slate-900 dark:hover:bg-slate-800',
							)}
						></li>
					))}
				</ul>
			</div>
		</div>
	)
}
