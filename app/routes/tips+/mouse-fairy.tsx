import { useEffect, useState } from 'react'

export default function MouseFairy() {
	const [mousePosition, setMousePOsition] = useState({ x: 0, y: 0 })
	const [dots, setDots] = useState<{ key: string; x: number; y: number }[]>([])

	function updateDots(e: any) {
		setMousePOsition({ x: e.clientX, y: e.clientY })
		const timestamp = Date.now()
		console.log({ timestamp })
		setDots(dots => [
			...dots,
			{ key: timestamp.toString(), x: e.clientX, y: e.clientY },
		])
		setTimeout(() => {
			// Remove the dot that with the corresponding key
			setDots(dots => dots.filter(dot => dot.key !== timestamp.toString()))
		}, 1000)
	}
	useEffect(() => {
		const DURATION = 30000000000
		const throttle = (function () {
			let timeout: any = undefined
			return function throttle(callback: () => void) {
				if (timeout === undefined) {
					callback()
					timeout = setTimeout(() => {
						// allow another call to be throttled
						timeout = undefined
					}, DURATION)
				}
			}
		})()
		function throttlify(callback: (e: any) => void) {
			return function throttlified(event: any) {
				throttle(() => {
					callback(event)
				})
			}
		}
		document.addEventListener('mousemove', throttlify(updateDots))
		return () => {
			document.removeEventListener('mousemove', updateDots)
		}
	}, [mousePosition])

	return (
		<div className="min-h-screen bg-indigo-500">
			{dots.map(dot => (
				<Dot key={dot.key} x={dot.x} y={dot.y} />
			))}
		</div>
	)
}

function Dot({ x, y }: { x: number; y: number }) {
	return (
		<div
			className="absolute h-8 w-8 rounded-full bg-white"
			style={{ left: x, top: y }}
		></div>
	)
}
