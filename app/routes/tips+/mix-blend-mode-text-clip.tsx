export default function ImageText() {
	return (
		<div className="grid h-screen place-items-center font-paytone-one">
			<div className="relative aspect-video w-2/3 overflow-hidden">
				<img
					src="/img/space-scene.png"
					alt=""
					className="animate-slowpan-2 absolute inset-0 h-[120%] w-[120%] max-w-none object-cover"
				/>
				<div className="isolate grid h-full place-items-center bg-black/70 mix-blend-darken ring-[20px] ring-inset ring-slate-600">
					<h1 className="text-9xl font-black uppercase text-white">Epic Web</h1>
				</div>
			</div>
		</div>
	)
}
