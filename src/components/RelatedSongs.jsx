import SongBar from './SongBar';

const RelatedSongs = ({
  handlePauseClick,
  handlePlayClick,
  activeSong,
  isPlaying,
  data,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex-col">
      {data?.map((song, i) => (
        <SongBar
          artistId={artistId}
          key={`${song.key}-${artistId}`}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
