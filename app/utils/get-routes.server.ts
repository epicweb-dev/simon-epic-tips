import { glob } from 'glob'
export const getRoutes = async (pattern: string) => await glob(pattern)
