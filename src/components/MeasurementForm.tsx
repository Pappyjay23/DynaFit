interface MeasurementFormProps {
	measurements: {
		height: number;
		chest: number;
		sleeveLength: number;
	};
	onMeasurementChange: (name: string, value: number) => void;
}

export default function MeasurementForm({
	measurements,
	onMeasurementChange,
}: MeasurementFormProps) {
	// Define min and max values for each field
	const ranges = {
		height: { min: 100, max: 400 },
		chest: { min: 100, max: 400 },
		sleeveLength: { min: 10, max: 80 },
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		onMeasurementChange(name, Number(value));
	};

	const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const { min, max } = ranges[name as keyof typeof ranges]; // Get min and max for the specific field
		const numericValue = Math.max(min, Math.min(max, Number(value))); // Clamp to the field's range
		onMeasurementChange(name, numericValue);
	};

	return (
		<div className='space-y-4'>
			<h2 className='text-xl'>Measurements</h2>
			{Object.entries(measurements).map(([name, value]) => {
				const { min, max } = ranges[name as keyof typeof ranges]; // Get min and max for each field
				return (
					<div key={name} className='flex flex-col space-y-1'>
						<label htmlFor={name} className='capitalize'>
							{name} (cm)
						</label>
						<input
							type='text'
							id={name}
							name={name}
							value={value}
							onChange={handleInputChange}
							onBlur={handleInputBlur} // Apply clamping on blur
							placeholder={`Enter a value between ${min}-${max}`}
							className='border rounded px-2 py-1 bg-white/30 outline-none border-none w-[60%]'
						/>
					</div>
				);
			})}
		</div>
	);
}
