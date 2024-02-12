import { useEffect, useRef } from "react";
export default function useSlideEffect({slider , index , setLogo }) {

 const swiperRef = useRef(null);
    useEffect(() => {


        if (swiperRef.current) {
          swiperRef.current.destroy();
        }
        const kidsSwiper = new Swiper(`.swiper-container-${slider}`, {
          direction: 'vertical',
          autoplay: {
            delay: "2000"         ,
          }
         ,
         keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
          loop: false,
          mousewheel: true,
          mousewheelControl: true,
          normalizeSlideIndex: true,
          on: {
            touchStart: function () {
              // Stop autoplay when user touches the image
              this.autoplay.stop();
            },
            touchEnd: function () {
              // Start autoplay when user releases the image
             
              this.autoplay.start();
    
              
            },
            reachEnd: function () {
              // Stop autoplay when user reaches the last slide
              this.autoplay.stop();
            },
            slideChange: function () {
              // Get active slide index
              const activeIndex = this.activeIndex;
    
              // Set logo to "black" when on the NewsLetter slide
              if (activeIndex === 5) {
                setLogo('black');
              } else {
                setLogo('white');
              }
            
            },
            
          },
        });
        swiperRef.current = kidsSwiper;
        if (index === 0) {
          kidsSwiper.autoplay.stop();
        }
        else {
          kidsSwiper.autoplay.start()
        }
        
        // Save Swiper instance to ref
      }, [index]);


}