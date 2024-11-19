function Song(props) {
  // set def value
  const {
    title = "name not ass",
    artist = "artist not ass",
    duration = 0,
  } = props;

  //yes i shamelessly copied from the movies exercise, if it works dont fix it
  function formatDuration(durationInSeconds) {
    // using math.floor ONLY this time
    const minutes = Math.floor(durationInSeconds / 60);
    const remainingSeconds = durationInSeconds % 60;

    return minutes + "m " + remainingSeconds + "s";
  }

  //   song jsxml
  return (
    <div className="col-lg-12">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{artist}</h6>
          <h5 className="card-subtitle mb-2 text-body-secondary">
            {formatDuration(duration)}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Song;
