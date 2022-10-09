import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong(song, data, i));
    dispatch(playPause(true));
  };
  return (
    <div className="flex w-[250px] flex-col backdrop-blur-sm rounded-lg cursor-pointer p-4 bg-white/5 bg-opacity-80 animate-slideup">
      <div className="relative w-full h-56 group">
        {' '}
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song?.images.coverart} alt="song_img" />
      </div>
      <div className="flex flex-col mt-4">
        <p className="font-semibold text-lg truncate text-white">
          <Link to={`/songs/${song?.key}`}>{song?.title}</Link>
        </p>
        <p className="font-semibold text-gray-300 mt-1">
          <Link
            to={
              song?.artists[0]
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song?.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
