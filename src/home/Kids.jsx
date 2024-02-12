import NewsLetter from './Newsletter';
import useSlideEffect from '../hooks/useSlideEffect';
import ImageSlide from '../Slider Components/SwiperSlide';

const KidsSlider = ({index , width , setLogo}) => {
 
useSlideEffect({slider:"kids" , index , setLogo});


  return (
    <div className="swiper-container-kids swiper-container" >
      <div className="swiper-wrapper">
        
      <ImageSlide type="kids" width={width} number="first" />
        <ImageSlide  type="kids" width={width} number="second" />
        <ImageSlide type="kids" width={width} number="third" />
        <ImageSlide type="kids" width={width} number="fourth" />
        <ImageSlide type="kids" width={width} number="fifth" />

        <div className="swiper-slide"><NewsLetter /></div>
      </div>
    </div>
  );
};

export default KidsSlider;