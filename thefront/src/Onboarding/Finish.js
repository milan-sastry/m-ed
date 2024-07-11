//import React, {useState} from 'react';





function Finish({onBackClick, onNextClick}){
    return (
        <div className="flex flex-col items-center  border-black mt-4">
            <div className="flex flex-col w-96 h-full pb-2 pt-4 justify-center items-center bg-white rounded-3xl form-labels space-y-4">
                <h1>Finish</h1>
                <div className="flex space-x-2 pb-2 justify-center rounded-b-3xl">
                        <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onBackClick}>
                            Back
                        </button>
                        <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onNextClick}>
                            Finish
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Finish;