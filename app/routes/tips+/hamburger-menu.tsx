export default function HamburgerMenu() {
	return (
		<div className="m-8 flex justify-center">
			<button className="group h-20 w-20 rounded-lg border-2 border-orange-400 transition-colors hover:border-yellow-400">
				<div className="grid justify-items-center gap-[3px]">
					<span className="h-2 w-8 rounded-t-full bg-orange-400 transition group-hover:w-10 group-hover:translate-y-2.5 group-hover:rotate-45 group-hover:rounded-none group-hover:bg-yellow-400 group-hover:ring-1 group-hover:ring-black/5"></span>
					<span className="h-1.5 w-8 rounded-full bg-orange-800 transition group-hover:scale-x-0"></span>
					<span className="h-2 w-8 rounded-b-full bg-orange-400 transition group-hover:w-10 group-hover:-translate-y-2.5 group-hover:-rotate-45 group-hover:rounded-none group-hover:bg-yellow-400 group-hover:ring-1 group-hover:ring-black/5"></span>
				</div>
			</button>
		</div>
	)
}
