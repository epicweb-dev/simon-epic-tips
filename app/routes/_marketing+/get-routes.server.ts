import { getRoutes as globRoutes } from '#app/utils/get-routes.server'

type Route = {
	name: string
	path: string
}

type Routes = {
	tips: Route[]
	tutorials: Route[]
}

export const getRoutes: () => Promise<Routes> = async () => {
	const tipRoutes = await globRoutes('app/routes/tips+/*.tsx')
	const tutorialRoutes = await globRoutes('app/routes/tutorials+/*/*.tsx')
	const tips = tipRoutes
		.map(route => ({
			name: route
				.replace('app/routes/tips+/', '')
				.replace('.tsx', '')
				.replace(/-/g, ' '),
			path: route.replace('app/routes/tips+', '/tips').replace('.tsx', ''),
		}))
		.sort((a, b) => a.name.localeCompare(b.name))

	const tutorials = tutorialRoutes
		.map(route => ({
			name: route
				.replace('app/routes/tutorials+/', '')
				.replace('+/index.tsx', '')
				.replace(/-/g, ' '),
			path: route
				.replace('app/routes/tutorials+', '/tutorials')
				.replace('+', '')
				.replace('index.tsx', ''),
		}))
		.sort((a, b) => a.name.localeCompare(b.name))
	return { tips, tutorials }
}
