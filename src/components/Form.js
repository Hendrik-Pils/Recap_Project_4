import React, { useState } from 'react';

function Form({ onAddActivity }) {
  const [activityName, setActivityName] = useState('');
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log("New form submitted:", activityName, isForGoodWeather);

    // Process data further or transfer it to the transferred handler
    // onAddActivity({ activityName, isForGoodWeather });

    event.target.reset();
    event.target.elements.activityName.focus();
  }

  function handleNameChange(event) {
    setActivityName(event.target.value);
  }

  function handleCheckboxChange(event) {
    setIsForGoodWeather(event.target.checked);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="activityName">
          <h3>Add your Activity</h3>
          <input
            id="activityName"
            name="activityName"
            type="text"
            value={activityName}
            onChange={handleNameChange}
          />
        </label>
        <div>
          <label htmlFor="goodweather">Good-weather activity:</label>
          <input
            type="checkbox"
            id="goodweather"
            name="goodweather"
            checked={isForGoodWeather}
            onChange={handleCheckboxChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;