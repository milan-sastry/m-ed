import React, { useState } from 'react';

const ChipSelects = ({question, items}) => {
    const [selected, setSelected] = useState([]);

    // Example function to handle selection (modify as needed)
    const handleSelect = (item) => {
        if (selected.includes(item)) {
            setSelected(selected.filter(s => s !== item));
        } else {
            setSelected([...selected, item]);
        }
    };

    return (
        <div className="w-5/6 chip-labels px-2 pt-2 pb-2 ">
            <h1>{question}</h1>
            <div className="mt-3"> 
                {items.map((item, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleSelect(item)} 
                        className={`px-2 py-2 text-sm font-medium mr-2 mb-2  hover:rounded-xl ${
                            selected.includes(item) ? 'bg-med-blue rounded-xl text-white' : 'bg-gray-200 hover:bg-slate-100 rounded-full text-gray-800'
                        }`}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};


function CreateTag({ onBackClick, onNextClick}) {


    return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center border form-labels border-gray-300 bg-white space-y-2 rounded-3xl w-96 pb-2 pt-2 mb-4 mt-4 overflow-y-auto">
            <div className="flex flex-col items-center space-y-2">
                <ChipSelects question="Select tags" items={['fuckfacediddlywaggon 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <ChipSelects question="Select tags" items={['fuckfacediddlywaggon 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <ChipSelects question="Select tags" items={['fuckfacediddlywaggon 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                
            </div>
            <div className="flex space-x-2 w-96 pb-2 justify-center rounded-b-3xl  bg-white">
                    <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onBackClick}>
                        Back
                    </button>
                    <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onNextClick}>
                        Next
                </button>
            </div>
        </div>
    </div>
    );
}

// Export your component
export default CreateTag;