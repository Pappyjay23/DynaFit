interface ShirtProps {
	height: number;
	chest: number;
	sleeveLength: number;
	waist: number;
}

export default function Shirt({
	height,
	chest,
	sleeveLength,
	waist,
}: ShirtProps) {
	return (
		<svg
			width={chest + 40}
			height={height + 40}
			viewBox={`0 0 ${chest + 40} ${height + 40}`}>
			{/* Shirt body */}
			<path
				d={`
			M20 20
			L${chest + 20} 20
			Q${chest + 40} ${height / 2 + 20}, ${chest + 20 - waist} ${height + 20}
			L${20 + waist} ${height + 20}
			Q0 ${height / 2 + 20}, 20 20
			Z
		`}
				fill='#3b82f6'
			/>

			{/* Left sleeve */}
			<path
				d={`
            M20 20
            L0 ${sleeveLength + 20}
            L20 ${sleeveLength + 40}
            Z
          `}
				fill='#2563eb'
			/>

			{/* Right sleeve */}
			<path
				d={`
            M${chest + 20} 20
            L${chest + 40} ${sleeveLength + 20}
            L${chest + 20} ${sleeveLength + 40}
            Z
          `}
				fill='#2563eb'
			/>

			{/* Neckline */}
			<path
				d={`
            M${chest / 2 - 20} 20
            Q${chest / 2 + 20} 0 ${chest / 2 + 60} 20
          `}
				fill='none'
				stroke='#1e40af'
				strokeWidth='2'
			/>
		</svg>
	);
}
