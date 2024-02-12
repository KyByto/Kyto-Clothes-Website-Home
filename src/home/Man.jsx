import NewsLetter from './Newsletter';
import useSlideEffect from '../hooks/useSlideEffect';
import ImageSlide from '../Slider Components/SwiperSlide';

const ManSlider = ({index , width , setLogo}) => {
  
useSlideEffect({index, setLogo, slider:"man"})

  return (
    <div className="swiper-container-man swiper-container" >
      <div className="swiper-wrapper">
       
       
        <ImageSlide type="man" width={width} number="first" />
        <ImageSlide  type="man" width={width} number="second" />
        <ImageSlide type="man" width={width} number="third" />
        <ImageSlide type="man" width={width} number="fourth" />
        <ImageSlide type="man" width={width} number="fifth" />

        <div className="swiper-slide"><NewsLetter /></div>
       
      </div>
    
    </div>
  );
};

export default ManSlider;