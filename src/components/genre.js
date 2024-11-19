import Song from "./song.js";

function Genre(props) {
  const { genre, songs } = props;

  //filter
  const filteredSongs = songs.filter((song) => song.genre === genre);

  //genre jsxml
  return (
    <div>
      <div className="row">
        <div className="text-box">
          <h5>{genre}</h5>
        </div>
      </div>

      <div className="row">
        {/* pass thru */}
        {filteredSongs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default Genre;
