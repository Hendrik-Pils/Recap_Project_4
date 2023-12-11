function Form({ onAddActivity }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const activityData = Object.fromEntries(formData);
    const goodweatheractivity =
      activityData.goodweatheractivity === "on" ? true : false;
    onAddActivity(activityData, goodweatheractivity);

    event.target.reset();
    event.target.elements.activityName.focus();
  };

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   console.log("New form submitted:", activityName, isForGoodWeather);

  //   // Process data further or transfer it to the transferred handler
  //   // onAddActivity({ activityName, isForGoodWeather });

  //   event.target.reset();
  //   event.target.elements.activityName.focus();
  // }

  // function handleNameChange(event) {
  //   setActivityName(event.target.value);
  // }

  // function handleCheckboxChange(event) {
  //   setIsForGoodWeather(event.target.checked);
  // }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="activityName">
          <h3>Add your Activity</h3>
          <input id="activityName" name="activityName" type="text" />
        </label>
        <div>
          <label htmlFor="goodweatheractivity">Good-weather activity:</label>
          <input
            type="checkbox"
            id="goodweatheractivity"
            name="goodweatheractivity"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
