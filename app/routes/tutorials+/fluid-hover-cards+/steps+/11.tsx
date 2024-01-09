export default function HoverStretchCards() {
	const imageIds = [
		'1500462918059-b1a0cb512f1d',
		'1531581147762-5961e6e2e6b1',
		'1626204327506-0d3ee11d7752',
		'1549068106-b024baf5062d',
	]

	return (
		<div className="grid min-h-screen place-items-center">
			<ul className="flex w-full max-w-6xl gap-4">
				{[...Array(4).keys()].map((_, index) => (
					<li
						key={index}
						className="group relative h-[500px] w-full flex-1 overflow-hidden rounded-2xl bg-rose-300 transition-all hover:grow-[1.25]"
					>
						<img
							className="absolute inset-0 h-full w-full object-cover"
							src={`https://images.unsplash.com/photo-${imageIds[index]}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlicmFudHxlbnwwfHwwfHx8MA%3D%3D`}
							alt=""
						/>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 from-30% p-4">
							<div className="w-48">
								<h2 className="text-2xl font-medium leading-tight text-white">
									The card title is here.
								</h2>
								<div className="grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]">
									<p className="mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Minima quia ipsa eius.
									</p>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
