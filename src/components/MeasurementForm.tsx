interface MeasurementFormProps {
    measurements: {
      height: number
      chest: number
      waist: number
      sleeveLength: number
    }
    onMeasurementChange: (name: string, value: number) => void
  }
  
  export default function MeasurementForm({ measurements, onMeasurementChange }: MeasurementFormProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      onMeasurementChange(name, Number(value))
    }
  
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Measurements</h2>
        {Object.entries(measurements).map(([name, value]) => (
          <div key={name} className="flex flex-col space-y-1">
            <label htmlFor={name} className="capitalize">{name} (cm)</label>
            <input
              type="number"
              id={name}
              name={name}
              value={value}
              onChange={handleInputChange}
              min={0}
              max={300}
              className="border rounded px-2 py-1"
            />
          </div>
        ))}
      </div>
    )
  }
  
  