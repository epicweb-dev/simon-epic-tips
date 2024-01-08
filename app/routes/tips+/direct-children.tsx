export default function DirectChildren() {
	return (
		<div className="mx-auto max-w-5xl p-4">
			<h1 className="text-2xl font-medium">Direct children selector</h1>
			<ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3 font-medium *:rounded-full *:bg-amber-200 *:px-5 *:py-1 *:text-amber-800">
				<li>you</li>
				<li>can</li>
				<li>now</li>
				<li>style</li>
				<li>direct</li>
				<li>children</li>
				<li>of</li>
				<li>elements</li>
			</ul>
		</div>
	)
}
