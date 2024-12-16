interface AdjustmentSliderProps {
	adjustments: {
		widthFactor: number;
		heightFactor: number;
	};
	handleAdjustmentChange: (name: string, value: number) => void;
}

const AdjustmentSliders = ({
	adjustments,
	handleAdjustmentChange,
}: AdjustmentSliderProps) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		handleAdjustmentChange(name, Number(value));
	};

	return (
		<div className='space-y-4'>
			<h2>Adjustments</h2>
			{Object.entries(adjustments).map(([name, value]) => (
				<div key={name} className='flex flex-col gap-2'>
					<label htmlFor={name} className='capitalize'>
						{name}
					</label>
					<input
						type='range'
						id={name}
						name={name}
						value={value}
						min={0.5}
						max={1.5}
						step={0.01}
						onChange={handleInputChange}
					/>
				</div>
			))}
		</div>
	);
};

export default AdjustmentSliders;
