export default function DropShadow() {
	return (
		<div className="grid min-h-screen justify-center bg-gradient-to-t from-blue-500 to-blue-200 p-8">
			<svg
				className="h-64 w-64 stroke-white drop-shadow-xl"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<line x1="2" x2="22" y1="12" y2="12"></line>
				<line x1="12" x2="12" y1="2" y2="22"></line>
				<path d="m20 16-4-4 4-4"></path>
				<path d="m4 8 4 4-4 4"></path>
				<path d="m16 4-4 4-4-4"></path>
				<path d="m8 20 4-4 4 4"></path>
			</svg>
		</div>
	)
}
