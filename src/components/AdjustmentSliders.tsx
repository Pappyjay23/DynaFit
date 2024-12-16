interface AdjustmentSlidersProps {
    adjustments: {
      widthFactor: number
      heightFactor: number
    }
    onAdjustmentChange: (name: string, value: number) => void
  }
  
  export default function AdjustmentSliders({ adjustments, onAdjustmentChange }: AdjustmentSlidersProps) {
    const handleSliderChange = (name: string, value: number) => {
      onAdjustmentChange(name, value)
    }
  
    return (
      <div className="space-y-4 mt-8">
        <h2 className="text-xl">Adjustments</h2>
        {Object.entries(adjustments).map(([name, value]) => (
          <div key={name} className="space-y-2">
            <label htmlFor={name} className="capitalize">{name.replace('Factor', '')}</label>
            <input
              type="range"
              id={name}
              min={0.5}
              max={1.5}
              step={0.01}
              value={value}
              onChange={(e) => handleSliderChange(name, parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        ))}
      </div>
    )
  }
  
  