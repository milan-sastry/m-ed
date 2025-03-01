import DropdownPage from "./DropdownPage";
import CreateAccount from "./CreateAccount";
import TagPage from "./TagPage";
import Finish from "./Finish";
import ProgressBar from "../oldComponents/Onboarding/ProgressBar";
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

    const steps = [
                    <CreateAccount onNextClick={handleNextClick} />, 
                    <DropdownPage onNextClick={handleNextClick} onBackClick={handleBackClick} />,
                    <TagPage onNextClick={handleNextClick} onBackClick={handleBackClick} />,
                    <Finish onNextClick={handleNextClick} onBackClick={handleBackClick}/>,
                ];

    
                const translateXValue = step * -100;

                return (
                    <div className="flex flex-col justify-start overflow-hidden h-screen">
                            <div className="flex w-full px-6 sm:px-10">
                                <ProgressBar currentStep={step} totalSteps={steps.length} />
                            </div>
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(${translateXValue}%)` }}
                            >
                                {steps.map((StepComponent, index) => (
                                    <div key={index} className="max-h-screen w-full flex-shrink-0 flex justify-center">
                                        {StepComponent}
                                    </div>
                                ))}
                            </div>
                        </div>
                );
}

export default Onboarding;