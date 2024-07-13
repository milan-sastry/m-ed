import { FaBolt } from 'react-icons/fa';
import React from 'react';


function Badge({ text }){
  return (
    <div className="border flex items-center justify-center space-x-2 bg-green-200 border-green-700 text-green-600 rounded-2xl px-1.5 h-7">
      <FaBolt color="green" />
      <p className="hide whitespace-nowrap">{text}</p>
    </div>
  );
}

export default Badge;