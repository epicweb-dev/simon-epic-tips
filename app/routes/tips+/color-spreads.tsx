import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'

const resolvedConfig = resolveConfig(tailwindConfig)

const colorSpreads = Object.entries(resolvedConfig.theme.colors).filter(
	([key]) =>
		!['inherit', 'current', 'transparent', 'black', 'white'].includes(key),
)

export default function ColorSpreads() {
	return (
		<div className="grid place-items-center p-4">
			<ul className="flex flex-wrap justify-center gap-12 p-4">
				{colorSpreads.map(([spreadKey, colorGroup]) => (
					<li
						key={spreadKey}
						className="relative w-48 overflow-hidden rounded-xl bg-slate-50 shadow-lg ring-1 ring-black/5"
					>
						<p className="absolute bottom-12 right-2 rotate-180 text-4xl font-bold uppercase tracking-widest text-white mix-blend-overlay saturate-200 [writing-mode:vertical-lr]">
							{spreadKey}
						</p>
						<ul className="grid justify-stretch">
							{Object.entries(colorGroup).map(([colorKey, colorValue]) => {
								const parsedColorValue = parseInt(colorKey)
								const isNumberScale = !Number.isNaN(parsedColorValue)

								const color = isNumberScale
									? parsedColorValue <= 500
										? colorGroup['900']
										: colorGroup['300']
									: '#fff'

								return (
									<li
										key="colorKey"
										className="flex h-10 items-center px-2"
										style={{
											backgroundColor: String(colorValue),
											color,
										}}
									>
										{colorKey}
									</li>
								)
							})}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
