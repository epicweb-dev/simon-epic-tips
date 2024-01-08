export default function NestedAbsolutePositions() {
	const cardClasses =
		'h-20 w-14 rounded-lg bg-white shadow-lg ring-1 ring-black/5 translate-x-1 -translate-y-1 grid place-items-center'

	const parentSquare = cardClasses + 'group'

	const childSquare =
		cardClasses +
		'absolute group-hover:-translate-y-2 group-hover:translate-x-8 group-hover:rotate-12 transition'

	return (
		<div className="grid min-h-screen place-items-center bg-slate-500 p-8">
			<div className={`${parentSquare} group`}>
				<div className={childSquare}>
					<div className={childSquare}>
						<div className={childSquare}></div>
					</div>
				</div>
			</div>
		</div>
	)
}
