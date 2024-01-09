import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { formatStep } from '#app/utils/format-step'
import { getRoutes } from '#app/utils/get-routes.server'

export async function loader() {
	const routes = await getRoutes(
		'app/routes/tutorials+/fluid-hover-cards+/steps+/[!index]*.tsx',
	)

	return json({ routes })
}

export default function Index() {
	const { routes } = useLoaderData<typeof loader>()
	return (
		<main>
			<div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-semibold">Steps breakdown</h1>

				{routes.length > 0 && (
					<ul className="mt-8">
						{routes.map((route, index) => {
							const step = formatStep(index + 1)
							return (
								<li key={route} className="py-0.5">
									<Link to={step} className="capitalize hover:underline">
										Step {step}
									</Link>
								</li>
							)
						})}
					</ul>
				)}
			</div>
		</main>
	)
}
