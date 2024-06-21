import React, { useState } from 'react';
import Layout from './Layout';

const Home: React.FC = () => {
    const [currentDate] = useState(new Date().toLocaleDateString());
    // Sample data and states for demonstration
    const [workoutPlan, setWorkoutPlan] = useState('5km Run');
    const [nutritionGoal, setNutritionGoal] = useState('2000 Calories');

    const handleWorkoutChange = (event) => {
        setWorkoutPlan(event.target.value);
    };

    const handleNutritionChange = (event) => {
        setNutritionGoal(event.target.value);
    };

    return (
        <Layout>
            <div className="home-container">
                <h1>{currentDate}</h1>

                <div className="section">
                    <h2>Today's Workout Plan</h2>
                    <p>{workoutPlan}</p>
                    <input type="text" value={workoutPlan} onChange={handleWorkoutChange} />
                </div>

                <div className="section">
                    <h2>Nutrition Goals</h2>
                    <p>{nutritionGoal}</p>
                    <input type="text" value={nutritionGoal} onChange={handleNutritionChange} />
                </div>

                {/* Other sections like motivational quotes, tips, etc., can be added here */}
            </div>
        </Layout>
    );
};

export default Home;
