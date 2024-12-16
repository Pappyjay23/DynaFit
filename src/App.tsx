import { useState } from "react";
import AppBg from "./assets/bg-img.png";
import MeasurementForm from "./components/MeasurementForm";
import Shirt from "./components/Shirt";
import AdjustmentSliders from "./components/AdjustmentSliders";

export default function App() {
	const [measurements, setMeasurements] = useState({
		height: 200,
		chest: 100,
		sleeveLength: 60,
		waist: 30
	});

	const handleMeasurementChange = (name: string, value: number) => {
		setMeasurements((prev) => ({ ...prev, [name]: value }));
	};

	const [adjustments, setAdjustments] = useState({
		widthFactor: 1,
		heightFactor: 1,
	});

	const handleAdjustmentChange = (name: string, value: number) => {
		setAdjustments((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div
			className='p-2 lg:p-4 bg-black text-white min-h-screen w-full h-full relative bg-center bg-cover'
			style={{ backgroundImage: `url(${AppBg})` }}>
			<div className='absolute inset-0 bg-black/70 z-[2]'></div>
			<div className='relative z-[4] px-4 '>
				<h1 className='text-3xl text-center mb-4'>DynaFit</h1>
				<div className='flex flex-col md:flex-row gap-8 bg-gray-500/20 backdrop-blur-sm p-5 rounded-lg w-full lg:w-[80%] mx-auto'>
					<div className='flex-[1.5] flex justify-center overflow-auto'>
						<div
							className='reflect relative h-fit py-5 px-8 border-8 border-white/40 border-double shadow-2xl backdrop-blur-2xl rounded-2xl cursor-pointer'
							style={{
								transform: "rotateX(30deg) rotateY(-20deg)",
								perspective: "1000px",
							}}>
							{/* Shirt component */}
							<Shirt
								height={measurements.height * adjustments.heightFactor}
								chest={measurements.chest * adjustments.widthFactor}
								sleeveLength={measurements.sleeveLength}
								waist={measurements.waist}
							/>
						</div>
					</div>
					<div className='flex-[1] flex flex-col gap-4'>
						{/* Measurement Form */}
						<MeasurementForm
							handleMeasurementChange={handleMeasurementChange}
							measurements={measurements}
						/>

						{/* Adjustment Slider */}
						<AdjustmentSliders
							adjustments={adjustments}
							handleAdjustmentChange={handleAdjustmentChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
