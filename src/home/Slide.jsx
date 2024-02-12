import { useEffect, useRef} from 'react';


const Slide = ({children , setActiveIndex, activeIndex, setLogo}) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const sliderSwiper = new Swiper('.swiper-container-slider', {
      direction: 'horizontal',
      loop: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      on: {
        slideChange: function () {
          const ActiveIndex = this.activeIndex;
          setLogo("white");
          setActiveIndex(ActiveIndex);
        
        },
       

      },
    
    });
    swiperRef.current = sliderSwiper;
  }, [activeIndex]);

 
  return (
  <>
    <div className="swiper-container-slider swiper-container" >
      <div className="swiper-wrapper">
        {children}
      </div>
     
    </div>  

</>
   
  );
};

export default Slide;