import { useDispatch, useSelector } from 'react-redux';
import { Error, SongCard, Loader } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(genres);
  console.log(data);

  if (isFetching) return <Loader title="Loading" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-white font-bold text-3xl">Discver</h2>
        <select
          className="bg-black text-gray-300 rounded-lg text-sm p-3 mt-5 sm:mt-0 outline-none"
          onChange={() => 'r'}
          value=""
          name=""
          id=""
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            date={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
