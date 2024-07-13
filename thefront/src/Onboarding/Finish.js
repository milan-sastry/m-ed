//import React, {useState} from 'react';





function Finish({onBackClick, onNextClick}){
    return (
            <div className="onboarding-container">
                <h1>Finish</h1>
                <div className="onboarding-form">
                        <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onBackClick}>
                            Back
                        </button>
                        <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onNextClick}>
                            Finish
                    </button>
                </div>
            </div>
    );
}
export default Finish;