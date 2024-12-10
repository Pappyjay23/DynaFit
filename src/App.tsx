import { useState } from 'react'
import Shirt from './components/Shirt'
import MeasurementForm from './components/MeasurementForm'
import AdjustmentSliders from './components/AdjustmentSliders'

export default function App() {
  const [measurements, setMeasurements] = useState({
    height: 200,
    chest: 100,
    waist: 80,
    sleeveLength: 60
  })

  const [adjustments, setAdjustments] = useState({
    widthFactor: 1,
    heightFactor: 1
  })

  const handleMeasurementChange = (name: string, value: number) => {
    setMeasurements(prev => ({ ...prev, [name]: value }))
  }

  const handleAdjustmentChange = (name: string, value: number) => {
    setAdjustments(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Clothing Size Adjustment</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Shirt 
            height={measurements.height * adjustments.heightFactor}
            chest={measurements.chest * adjustments.widthFactor}
            waist={measurements.waist * adjustments.widthFactor}
            sleeveLength={measurements.sleeveLength * adjustments.heightFactor}
          />
        </div>
        <div className="flex-1">
          <MeasurementForm 
            measurements={measurements}
            onMeasurementChange={handleMeasurementChange}
          />
          <AdjustmentSliders 
            adjustments={adjustments}
            onAdjustmentChange={handleAdjustmentChange}
          />
        </div>
      </div>
    </div>
  )
}

