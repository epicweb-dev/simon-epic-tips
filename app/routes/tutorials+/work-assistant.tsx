// Reference: https://dribbble.com/shots/7448823-Work-assistant-APP-card/attachments/301095?mode=media

export default function WorkAssistant() {
	const data = [
		{
			title: 'Financial App',
			date: '25 Apr 2030',
			avatars: ['image-1', 'image-2', 'image-3'],
			color: 'orange',
		},
		{
			title: 'Graphic Design',
			date: '18 May 2030',
			avatars: ['image-1', 'image-2', 'image-3'],
			color: 'green',
		},
		{
			title: 'Artifact Model',
			date: '17 Nov 2030',
			avatars: ['image-1', 'image-2', 'image-3'],
			color: 'pink',
		},
		{
			title: 'Operating System',
			date: '25 Apr 2030',
			avatars: ['image-1', 'image-2', 'image-3'],
			color: 'violet',
		},
		{
			title: 'Business card',
			date: '25 Apr 2030',
			avatars: ['image-1', 'image-2', 'image-3'],
			color: 'blue',
		},
		{
			title: 'Centered Design',
			date: '25 Apr 2030',
			avatars: ['image-1', 'image-2', 'image-3'],
			color: 'rose',
		},
	]

	const colorsLookup: Record<string, string> = {
		orange: 'from-orange-300 to-orange-200 shadow-orange-500/30',
		green: 'from-green-300 to-green-200 shadow-green-500/30',
		pink: 'from-pink-300 to-pink-200 shadow-pink-500/30',
		violet: 'from-violet-300 to-violet-200 shadow-violet-500/30',
		blue: 'from-blue-300 to-blue-200 shadow-blue-500/30',
		rose: 'from-rose-300 to-rose-200 shadow-rose-500/30',
	}
	return (
		<div className="font-poppins bg-slate-50">
			<div className="relative mx-auto max-w-6xl py-48">
				{/* Decoration */}
				<div className="absolute -left-16 top-24 flex w-56 flex-wrap gap-8">
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
				</div>

				{/* Decoration */}
				<div className="absolute -right-16 bottom-24 flex w-56 flex-wrap gap-8">
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
				</div>

				<div className="absolute bottom-40 left-32 flex w-48 flex-wrap gap-8">
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
					<div className="h-2.5 w-2.5 rounded-full bg-slate-200"></div>
				</div>
				<ul className="isolate grid grid-cols-3 gap-16">
					{data.map(entry => (
						<li
							key={entry.title}
							className={`shadow-3xl grid aspect-square w-full content-between rounded-[48px] bg-gradient-to-b p-10 ${
								colorsLookup[entry.color]
							}`}
						>
							<div className="pr-8">
								<h2 className="text-5xl font-extrabold leading-[1.15]">
									{entry.title}
								</h2>
								<p className="mt-6 text-xl">{entry.date}</p>
							</div>
							<ul className="flex gap-2 justify-self-end">
								{/* First avatar */}
								<li>
									<img
										src="https://picsum.photos/80/80"
										className="h-12 w-12 rounded-full"
										alt=""
									/>
								</li>
								{/* Extra user cout */}
								<li className="grid h-12 w-12 place-items-center rounded-full bg-slate-800 text-white">
									{entry.avatars.length - 1}+
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
