export default function Glassmorphism() {
	return (
		<div className="min-h-screen bg-indigo-200">
			<div className="grid place-items-center bg-indigo-200 py-24">
				<div className="relative">
					<svg
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute -right-12 -top-12 w-32 text-red-500"
					>
						<path
							fill="currentcolor"
							d="M50.6,-42.3C64.6,-22.8,74.3,-1.8,70.5,16.7C66.8,35.2,49.6,51.3,30.5,58.8C11.3,66.3,-9.8,65.3,-31.1,57.7C-52.4,50.1,-73.9,35.9,-76.4,19.1C-78.9,2.3,-62.4,-17.1,-46.5,-37.1C-30.6,-57,-15.3,-77.4,1.5,-78.6C18.3,-79.8,36.6,-61.8,50.6,-42.3Z"
							transform="translate(100 100)"
						></path>
					</svg>
					<svg
						viewBox="0 0 200 200"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute -bottom-16 -left-16 w-32 text-yellow-500"
					>
						<path
							fill="currentcolor"
							d="M46.8,-37.1C62.7,-17.3,79.1,2.2,76.6,19.2C74.1,36.2,52.7,50.6,33.1,54.6C13.5,58.6,-4.3,52.2,-19.7,43.7C-35.1,35.2,-48.2,24.6,-51.2,11.6C-54.3,-1.5,-47.4,-16.9,-37.2,-35.4C-27,-53.9,-13.5,-75.5,1,-76.2C15.4,-77,30.8,-57,46.8,-37.1Z"
							transform="translate(100 100)"
						></path>
					</svg>
					<div className="isolate aspect-video w-96 rounded-xl bg-white/0 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl">
						<div className="flex h-full flex-col justify-between p-6 font-mono text-slate-800 [text-shadow:1px_1px_rgb(255_255_255/0.5)]">
							<div className="isolate flex -space-x-4">
								<div className="h-10 w-10 rounded-full bg-red-500"></div>
								<div className="h-10 w-10 rounded-full bg-yellow-500 mix-blend-overlay"></div>
							</div>
							<div>
								<div className="flex justify-between">
									<p>John Doe</p>
									<p>05/26</p>
								</div>
								<p className="mt-1">0493 3382 1172 4502</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
