import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button'
import Mealplan from '../components/Mealplan/Mealplan';
import './MealPlanPage.css';

const MealPlanPage = ({ formData,  mealplanData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!mealplanData.length) {
      navigate('/');
      console.log('navigated')
    }
  }, [mealplanData, navigate]);

  const handleReturnToFormPage = () => {
    // window.location.href = '/';
    navigate('/');
  }

  return (
    <div className='whole-meal-plan-component'>
      <Button id="mealplan-button" ariaLabel="link to meal plan form" onClick={handleReturnToFormPage} disabled={false}>
        Back to Meal Plan Form 
      </Button>
      {mealplanData.length && <Mealplan mealplanData={mealplanData} />}
    </div>
  )
}

export default MealPlanPage
