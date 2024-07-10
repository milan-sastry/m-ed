import CreateProfile from "./CreateProfile";
import CreateUser from "./CreateUser";
import CreateTag from "./CreateTag";
import Submit from "./Submit";
import React, { useState,useEffect } from "react";

function Onboarding() {
    useEffect(() => {
        const originalBackgroundColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = '#BC392E';
        
        return () => {
            document.body.style.backgroundColor = originalBackgroundColor;
        };
    }, []);

    const [step, setStep] = useState(0);
    const [furthestStep, setFurthestStep] = useState(0);  



    const handleNextClick = () => {
        if (step < steps.length - 1) {
            setStep(step + 1);
            setFurthestStep(Math.max(furthestStep, step + 1));
        } 
    };

    const handleBackClick = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    function ProgressDot({ currentStep, totalSteps }) {
        // Calculate dot position
        const dotPosition = (currentStep / (totalSteps - 1)) * 100;

    
        return (
            <div
                className="absolute transition-transform duration-1000 ease-in-out w-10 h-10 rounded-full bg-med-blue"
                style={{
                    left: `${dotPosition}%`,
                    transform: 'translate(-50%, -50%)', // Center the dot vertically on the bar
                    top: '50%', // Position the dot in the middle of the progress bar's height
                    zIndex: 10,
                }}
            >
            </div>
        );
    }

    function calculateProgressBarWidth(currentStep, totalSteps) {
        return (1- (currentStep/(totalSteps-1)));
        
    }
    
    function ProgressBar({ currentStep, totalSteps }) {
        const widthPercentage = calculateProgressBarWidth(currentStep, totalSteps)*100;
        return (

            <div className="relative flex mx-40 justify-center items-center mt-2 pt-4 mb-4"> {/* Adjust the height as needed */}
                <div className="h-2 w-full relative bg-med-blue  flex justify-center rounded-xl">
                        <ProgressDot currentStep={currentStep} totalSteps={totalSteps}/>
                </div>
                <div className="h-2 absolute bg-white  flex justify-center rounded-xl" style={{zIndex:5, right:0, width: `${widthPercentage}%` }}></div>
                
            </div>

        );
    }





    const steps = [
                    <CreateUser onNextClick={handleNextClick} />, 
                    <CreateProfile onNextClick={handleNextClick} onBackClick={handleBackClick} />,
                    <CreateTag onNextClick={handleNextClick} onBackClick={handleBackClick} />,
                    <Submit onNextClick={handleNextClick} onBackClick={handleBackClick}/>,
                ];

    
                const translateXValue = step * -100;

                return (
                    <div className="flex h-screen flex-col justify-start overflow-hidden border-black">
                        <ProgressBar currentStep={step} totalSteps={steps.length} />
                        <div 
                            className=" border-white flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(${translateXValue}%)` }}
                        >
                            {steps.map((StepComponent, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    {StepComponent}
                                </div>
                            ))}
                        </div>
                    </div>
                );
}

export default Onboarding;