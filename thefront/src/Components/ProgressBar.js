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
export default ProgressBar;