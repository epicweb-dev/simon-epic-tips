import { json, type MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getRoutes } from './get-routes.server'

export const loader = async () => {
	const { tips, uiChallenges } = await getRoutes()
	if (!tips) throw new Error('Tips not found')
	if (!uiChallenges) throw new Error('UI Challenges not found')
	return json({ tips, uiChallenges })
}

export const meta: MetaFunction = () => [{ title: 'Epic CSS Tips' }]

export default function Index() {
	const { tips, uiChallenges } = useLoaderData<typeof loader>()
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

					{uiChallenges.length > 0 && (
						<li>
							<h2 className="text-xl font-medium">UI Challenges</h2>
							<ul className="mt-2">
								{uiChallenges.map(challenge => (
									<li key={challenge.name} className="py-0.5">
										<Link
											to={challenge.path}
											className="capitalize hover:underline"
										>
											{challenge.name}
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
