import { Error, SongCard, Loader } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
  console.log(genres);
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="text-white font-bold text-3xl">Discver</h2>
        <select
          className="bg-black text-gray-300 rounded-lg text-sm p-3 mt-5 sm:mt-0 outline-none"
          onChange={{}}
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
          <SongCard key={song.key} i={i} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
