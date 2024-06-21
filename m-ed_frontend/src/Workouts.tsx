import React, { useState } from 'react';
import Layout from './Layout';


const Workout = ({ title, onToggle, isSelected }) => {
    return (
        <div className={`workout ${isSelected ? 'selected' : ''}`} onClick={onToggle}>
            <div className="workout-header">
                <span className={`circle ${isSelected ? 'filled' : 'unfilled'}`}></span>
                <h3>{title}</h3>
            </div>
            <div className="workout-details">
                <div className="input-group">
                    <label>Weight</label>
                    <input type="number" placeholder="lbs" />
                </div>
                <div className="input-group">
                    <label>Sets</label>
                    <input type="number" placeholder="Sets" />
                </div>
                <div className="input-group">
                    <label>Reps</label>
                    <input type="number" placeholder="Reps" />
                </div>
            </div>
        </div>
    );
};


const Workouts = () => {
    const [selectedWorkouts, setSelectedWorkouts] = useState(Array(5).fill(false));

    const toggleWorkout = (index) => {
        const newSelectedWorkouts = [...selectedWorkouts];
        newSelectedWorkouts[index] = !newSelectedWorkouts[index];
        setSelectedWorkouts(newSelectedWorkouts);
    };

    return (
        <Layout>
            {selectedWorkouts.map((isSelected, index) => (
                <Workout 
                    key={index} 
                    title={`Workout ${index + 1}`} 
                    isSelected={isSelected} 
                    onToggle={() => toggleWorkout(index)} 
                />
            ))}
        </Layout>
    );
};

export default Workouts;
