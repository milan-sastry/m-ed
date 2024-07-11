import React, { useState } from 'react';

const Chips = ({question, items}) => {
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

export default Chips;