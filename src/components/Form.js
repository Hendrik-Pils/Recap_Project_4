import { React } from "react";

function Form({ onAddActivity }) {
  return (
    <>
      <form className="form">
        <label htmlFor="activity">
          <h3>Add your Activity</h3>
          <input id="activity" name="activity" type="text" />
        </label>
        <div>
          <label htmlFor="goodweather">Good-weather activity:</label>
          <input type="checkbox" id="goodweather" name="goodweather" />
        </div>
        <button type="button">Submit</button>
      </form>
    </>
  );
}

export default Form;
