

export default function ImageSlide({type,number,width} ) {
    return (
        <div className="swiper-slide">
            
            <img src={`/public/images/${type}/${number}/${width}.jpg`}/>
            </div>
    )
}