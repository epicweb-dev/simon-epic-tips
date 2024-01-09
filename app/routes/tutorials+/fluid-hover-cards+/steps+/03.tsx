export default function HoverStretchCards() {
	return (
		<div className="grid min-h-screen place-items-center">
			<ul className="flex w-full max-w-6xl gap-4">
				{[...Array(4).keys()].map(item => (
					<li
						key={item}
						className="h-[500px] w-full rounded-2xl bg-rose-300"
					></li>
				))}
			</ul>
		</div>
	)
}
