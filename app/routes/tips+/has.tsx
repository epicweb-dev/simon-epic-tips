const cardsData = [
	{
		title: 'Card Without An Image',
		text: 'Lorem epic dolor stack amet epic adipisicing elit.',
	},
	{
		text: "This card doesn't even have a title! No image, no title. Just a bunch of text. Still, this card belongs here!",
	},
	{
		title: 'Card with title and image',
		text: 'Lorem epic dolor stack amet consectetur.',
		image: `https://images.unsplash.com/photo-1530714457710-6bf1899c1d32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZpYnJhbnQlMjBjb2xvcnN8ZW58MHwwfDB8fHww`,
	},
	{
		text: 'This card has an image, but no title.',
		image: `https://images.unsplash.com/photo-1528811692195-d5037ac4b7cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx2aWJyYW50JTIwY29sb3JzfGVufDB8MHwwfHx8MA%3D%3D`,
	},
]

export default function Has() {
	return (
		<div className="min-h-screen bg-slate-300">
			<ul className="mx-auto grid max-w-5xl grid-cols-2 items-start gap-4 p-6">
				{cardsData.map((card, i) => (
					<Card key={i} {...card} />
				))}
			</ul>
		</div>
	)
}

// ------------------------------
// Card
// ------------------------------

type CardProps = {
	image?: string
	title?: string
	text: string
}

function Card({ image, title, text }: CardProps) {
	return (
		<li
			className="group/card overflow-hidden rounded-lg bg-white p-4 shadow-md ring-1 ring-black/5 transition hover:-translate-y-px hover:shadow-lg has-[img]:p-0
		
		[&:not(:has(h2))]:bg-yellow-200

		"
		>
			{image && <img src={image} alt="" />}
			<div className="grid gap-2 group-has-[img]/card:p-4">
				{title && <h2 className="text-xl font-medium">{title}</h2>}
				<p className="text-slate-700">{text}</p>
			</div>
		</li>
	)
}
