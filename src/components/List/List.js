function List({ activities, isGoodWeather }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now."}{" "}
      </h2>
      <ul>
        {activities.map(({ activityName, id }) => (
          <li key={id}>{activityName}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
