// import React from 'react'

const Mealplan = ({ mealplanData }) => {
  console.log('mealplan', mealplanData)
  return (
    <div>
      {mealplanData.map((day, index) => (
        <div key={index}>
          <h2>Day {index + 1}</h2>
          <p>Breakfast: {day.breakfast}</p>
          <p>Lunch: {day.lunch}</p>
          <p>Dinner: {day.dinner}</p>
          <p>Snack: {day.snack}</p>
        </div>
      ))}
    </div>
  )
}

export default Mealplan
