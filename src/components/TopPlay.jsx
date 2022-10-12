import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FreeMode } from 'swiper';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="flex flex-row items-center py-2 p-4 w-full hover:bg-[#4c426e] rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-white text-base mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        alt={song?.title}
        src={song?.images?.coverart}
      />
      <div className="flex-1 flex-col flex justify-center mx-4">
        <Link to={`/songs/${song?.key}`}>
          <h1 className="text-white font-bold text-xl">{song?.title}</h1>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <h1 className="text-gray-300 mt-1  text-base">{song?.subtitle}</h1>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);
  const topCharts = data?.slice(0, 5);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  console.log(topCharts);
  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-white font-bold text-2xl">Top Charts</h3>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topCharts?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              activeSong={activeSong}
              isPlaying={isPlaying}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => {
                handlePlayClick(song, i);
              }}
            />
          ))}
        </div>
        <div className="mt-8 w-full  flex flex-col">
          {' '}
          <div className=" flex flex-row justify-between items-center">
            <h3 className="text-white font-bold text-2xl">Top Artists</h3>
          </div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {topCharts?.map((song, i) => (
              <SwiperSlide
                key={song?.key}
                style={{ width: '25%', height: 'auto' }}
                className="shadow-lg rounded-full animate-slideright"
              >
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                  <img
                    alt="artist"
                    src={song?.images.background}
                    className="rounded-full w-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
