import React, { useState } from 'react';

function DropdownQuestion({question,options}){

    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (

    <div className="flex flex-col w-80 space-y-2">
        <h1>{question}</h1>
        <select
            value={selectedOption}
            onChange={handleDropdownChange}
            className="bg-white border border-gray-400 hover:bg-slate-100 text-black py-2 pr-2 rounded-md"
        >
            <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
        </select>
    </div>);
}

export default DropdownQuestion;