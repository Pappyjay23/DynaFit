interface MeasurementFormProps {
	measurements: {
		height: number;
		chest: number;
		sleeveLength: number;
	};
	handleMeasurementChange: (name: string, value: number) => void;
}

const MeasurementForm = ({
	measurements,
	handleMeasurementChange,
}: MeasurementFormProps) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		handleMeasurementChange(name, Number(value));
	};

	const ranges = {
		height: { min: 100, max: 400 },
		chest: { min: 100, max: 400 },
		sleeveLength: { min: 10, max: 100 },
		waist: { min: 10, max: 30 },
	};
	const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const { min, max } = ranges[name as keyof typeof ranges];
		const numericalValue = Math.max(min, Math.min(max, Number(value)));
		handleMeasurementChange(name, numericalValue);
	};
	return (
		<div className='space-y-4'>
			<h2>Measurements</h2>
			{Object.entries(measurements).map(([name, value]) => (
				<div key={name} className='flex flex-col gap-2'>
					<label htmlFor={name} className='capitalize'>
						{name}
					</label>
					<input
						type='text'
						id={name}
						name={name}
						value={value}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
						className='border-0 outline-none px-2 py-1 rounded-[4px] bg-white/30 w-[60%]'
					/>
				</div>
			))}
		</div>
	);
};

export default MeasurementForm;
