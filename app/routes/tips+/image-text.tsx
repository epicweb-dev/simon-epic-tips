export default function ImageText() {
	return (
		<div className="font-paytone-one grid h-screen place-items-center">
			<div className="relative aspect-video w-2/3 overflow-hidden">
				<img
					src="https://images.unsplash.com/photo-1615828055135-18004ed15196?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlnaHQlMjBjaXR5JTIwbGlnaHRzfGVufDB8fDB8fHww"
					alt=""
					className="animate-slowpan absolute inset-0 h-[120%] w-[120%] max-w-none object-cover blur-3xl brightness-[3]"
				/>
				<div className="isolate grid h-full place-items-center bg-black/70 mix-blend-darken ring-[20px] ring-inset ring-slate-600">
					<h1 className="text-9xl font-black uppercase text-white">Epic Web</h1>
				</div>
			</div>
		</div>
	)
}
