import { json, type MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getRoutes } from './get-routes.server'

export const loader = async () => {
	const { tips, tutorials } = await getRoutes()
	if (!tips) throw new Error('Tips not found')
	if (!tutorials) throw new Error('UI Challenges not found')
	return json({ tips, tutorials })
}

export const meta: MetaFunction = () => [{ title: 'Epic CSS Tips' }]

export default function Index() {
	const { tips, tutorials } = useLoaderData<typeof loader>()
	return (
		<main>
			<div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-semibold">Epic CSS Tips</h1>

				<ul className="mt-8 flex gap-40">
					{tips.length > 0 && (
						<li>
							<h2 className="text-xl font-medium">Tips</h2>
							<ul className="mt-2">
								{tips.map(tip => (
									<li key={tip.name} className="py-0.5">
										<Link to={tip.path} className="capitalize hover:underline">
											{tip.name}
										</Link>
									</li>
								))}
							</ul>
						</li>
					)}

					{tutorials.length > 0 && (
						<li>
							<h2 className="text-xl font-medium">Tutorials</h2>
							<ul className="mt-2">
								{tutorials.map(tutorial => (
									<li key={tutorial.name} className="py-0.5">
										<Link
											to={tutorial.path}
											className="capitalize hover:underline"
										>
											{tutorial.name}
										</Link>
									</li>
								))}
							</ul>
						</li>
					)}
				</ul>
			</div>
		</main>
	)
}
