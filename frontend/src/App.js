import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import MealPlanPage from './pages/MealPlanPage';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    age: '',
    allergies: [],
    intolerances: '',
    diets: [],
    otherfood: '',
  });
  const [mealplanData, setMealplanData] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <FormPage
              formData={formData}
              setFormData={setFormData}
              mealplanData={mealplanData}
              setMealplanData={setMealplanData}
            />
          }
        />
        <Route
          path='/mealplan'
          element={
            <MealPlanPage
              formData={formData}
              mealplanData={mealplanData}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
