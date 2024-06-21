import React, { useState } from 'react';
import Layout from './Layout';

const NutritionTracker: React.FC = () => {
    const [mealName, setMealName] = useState('');
    const [calories, setCalories] = useState('');
    const [carbs, setCarbs] = useState('');
    const [protein, setProtein] = useState('');
    const [fats, setFats] = useState('');

    const handleAddMeal = (event) => {
        event.preventDefault();
        // Here you would normally add logic to store the meal data
        alert(`Added: ${mealName} with ${calories} calories, ${carbs}g carbs, ${protein}g protein, ${fats}g fats`);
    };

    return (
        <Layout>
            <div className="nutrition-container">
                <h1>Nutrition Tracker</h1>

                <div className="meal-entries">
                    <h2>Meal Entries</h2>
                    <p><strong>Breakfast:</strong> Oatmeal - 300 Calories</p>
                    <p><strong>Lunch:</strong> Grilled Chicken Salad - 450 Calories</p>
                    <p><strong>Dinner:</strong> Salmon and Vegetables - 500 Calories</p>
                    {/* More sample entries can be added here */}
                </div>

                <div className="summary">
                    <h2>Daily Summary</h2>
                    <p><strong>Total Calories:</strong> 1250</p>
                    <p><strong>Total Carbs:</strong> 100g</p>
                    <p><strong>Total Protein:</strong> 80g</p>
                    <p><strong>Total Fats:</strong> 50g</p>
                </div>

                <div className="add-meal">
                    <h2>Add Meal</h2>
                    <form onSubmit={handleAddMeal}>
                        <input type="text" placeholder="Meal Name" value={mealName} onChange={(e) => setMealName(e.target.value)} />
                        <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
                        <input type="number" placeholder="Carbs (g)" value={carbs} onChange={(e) => setCarbs(e.target.value)} />
                        <input type="number" placeholder="Protein (g)" value={protein} onChange={(e) => setProtein(e.target.value)} />
                        <input type="number" placeholder="Fats (g)" value={fats} onChange={(e) => setFats(e.target.value)} />
                        <button type="submit">Add Meal</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default NutritionTracker;
