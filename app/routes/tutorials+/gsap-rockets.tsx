import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import defaultTheme from 'tailwindcss/defaultTheme'

export default function Rockets() {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.to('[data-gsap-thing]', {
			scrollTrigger: {
				trigger: '[data-gsap-thing]',
				start: 'top 50%',
				end: 'bottom 20%',
				scrub: 0.5,
			},
			y: defaultTheme.spacing[32],
		})
		gsap.to('[data-gsap-thing-two]', {
			scrollTrigger: {
				trigger: '[data-gsap-thing-two]',
				start: 'top 50%',
				end: 'bottom 20%',
				scrub: 3,
				markers: true,
			},
			y: -64,
		})
	}, [])

	return (
		<>
			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-600"></div>
			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-400"></div>
			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-400"></div>
			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-400"></div>
			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-400"></div>

			<div className="mx-auto max-w-7xl px-6 py-64">
				<div className="grid grid-cols-2 items-center gap-44">
					<div className="grid grid-cols-2 items-start gap-6">
						<div className="grid gap-6" data-gsap-thing>
							<div className="grid justify-items-center gap-3 rounded-2xl bg-violet-100 p-7">
								<div className="size-16 rounded-3xl bg-indigo-900/30"></div>
								<p className="text-lg uppercase tracking-wider">Zheng</p>
							</div>
							<div className="grid justify-items-center gap-3 rounded-2xl bg-violet-100 p-7">
								<div className="size-16 rounded-3xl bg-indigo-900/30"></div>
								<p className="text-lg uppercase tracking-wider">Orbitalis</p>
							</div>
							<div className="grid justify-items-center gap-3 rounded-2xl bg-violet-100 p-7">
								<div className="size-16 rounded-3xl bg-indigo-900/30"></div>
								<p className="text-lg uppercase tracking-wider">Cosmic</p>
							</div>
						</div>
						<div data-gsap-thing-two className="mt-16 grid gap-6">
							<div className="grid aspect-square items-end justify-items-center rounded-2xl bg-violet-100 p-10">
								<div className="size-24 rounded-3xl bg-indigo-900/30"></div>
								<p className="text-lg uppercase tracking-wider">Asteroid</p>
							</div>
							<div className="grid aspect-square items-end justify-items-center rounded-2xl bg-violet-100 p-10">
								<div className="size-24 rounded-3xl bg-indigo-900/30"></div>
								<p className="text-lg uppercase tracking-wider">Spaceship</p>
							</div>
						</div>
					</div>
					<div>
						<h2 className="text-5xl font-bold">
							We have only the best rocket brands!
						</h2>
						<p className="mt-8 text-lg text-slate-700/80">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut
							nesciunt, exercitationem ullam eveniet quae unde excepturi sit
							sunt animi distinctio consequatur. Voluptatibus quidem consequatur
							perferendis doloremque laboriosam repudiandae sit?
						</p>
						<a
							className="mt-16 inline-block rounded-full bg-violet-600 px-8 py-3 font-semibold text-white"
							href="#"
						>
							Explore rockets
						</a>
					</div>
				</div>
			</div>

			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-600"></div>
			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-400"></div>
			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-400"></div>
			<div className="h-80 bg-rose-500"></div>
			<div className="h-80 bg-rose-400"></div>
		</>
	)
}
