import './Mealplan.css';

const Mealplan = ({ mealplanData }) => {
  // console.log('mealplan', mealplanData);

  return (
    <div className="whole-meal-plan-component">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th id='corner'> </th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
              <th>Snack</th>
            </tr>
          </thead>
          <tbody>
            {mealplanData.map((day, index) => (
              <tr key={index}>
                <td className='days'>Day {index + 1}</td>
                <td className='meal'>{day.breakfast}</td>
                <td className='meal'>{day.lunch}</td>
                <td className='meal'>{day.dinner}</td>
                <td className='meal'>{day.snack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mealplan;
