import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  if (isFetching) return <Loader title="Loading your search" />;
  if (error) return <Error />;

  const songs = data?.tracks?.hits?.map((song) => song.track);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Search Results for <span className="font-black">{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
