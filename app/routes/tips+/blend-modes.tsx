// https://www.pinterest.ch/pin/186195765827267260/

export default function BlendModes() {
	return (
		<div className="grid h-screen grid-cols-2 grid-rows-2 p-8">
			<div className="w-32">
				<div className="relative h-32 w-full overflow-hidden rounded-lg border">
					<div className="absolute -bottom-28 -left-44 h-64 w-64 rounded-full bg-blue-500"></div>
					<div className="absolute -bottom-28 -right-44 h-64 w-64 rounded-full bg-green-400 mix-blend-multiply"></div>
				</div>
				<h2 className="mt-2 text-center text-2xl font-bold">MetLife</h2>
			</div>

			<div className="flex -space-x-16">
				<div className="self-start justify-self-end">
					<div className="h-32 w-32 rounded-full border-[24px] border-red-700"></div>
				</div>
				<div className="self-start justify-self-end">
					<div className="h-32 w-32 rounded-full bg-blue-400 mix-blend-multiply"></div>
				</div>
			</div>

			<div className="self-end">
				<div className="flex -space-x-16">
					<div className="self-start justify-self-end">
						<div className="h-32 w-32 rounded-full bg-red-500"></div>
					</div>
					<div className="self-start justify-self-end">
						<div className="h-32 w-32 rounded-full bg-orange-400 mix-blend-hard-light"></div>
					</div>
				</div>
			</div>

			<div className="self-end justify-self-end">
				<p>Logo 4</p>
			</div>
		</div>
	)
}
