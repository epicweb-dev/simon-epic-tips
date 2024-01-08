import { glob } from 'glob'

type Route = {
	name: string
	path: string
}

type Routes = {
	tips: Route[]
	uiChallenges: Route[]
}

export const getRoutes: () => Promise<Routes> = async () => {
	const tipRoutes = await glob('app/routes/tips+/*.tsx')
	const uiChallengeRoutes = await glob('app/routes/ui-challenges+/*.tsx')
	const tips = tipRoutes
		.map(route => ({
			name: route
				.replace('app/routes/tips+/', '')
				.replace('.tsx', '')
				.replace(/-/g, ' '),
			path: route.replace('app/routes/tips+', '/tips').replace('.tsx', ''),
		}))
		.sort((a, b) => a.name.localeCompare(b.name))

	const uiChallenges = uiChallengeRoutes
		.map(route => ({
			name: route
				.replace('app/routes/ui-challenges+/', '')
				.replace('.tsx', '')
				.replace(/-/g, ' '),
			path: route
				.replace('app/routes/ui-challenges+', '/ui-challenges')
				.replace('.tsx', ''),
		}))
		.sort((a, b) => a.name.localeCompare(b.name))
	return { tips, uiChallenges }
}
