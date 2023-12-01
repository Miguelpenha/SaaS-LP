import { useState } from 'react'
import { Container, Photo } from './style'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Photo1Source from '../../public/img/Photos/Photo 1.jpg'
import Photo2Source from '../../public/img/Photos/Photo 2.jpg'
import Photo3Source from '../../public/img/Photos/Photo 3.jpg'
import page from '../../services/page'

function Gallery() {
    const [loaded, setLoaded] = useState(false)

    return (
        <Container
            loop
            navigation
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={() => setLoaded(true)}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
        >
            <SwiperSlide>
                <Photo placeholder="blur" src={Photo1Source} alt={page.alts.gallery[0]}/>
            </SwiperSlide>
            {loaded && <>
                <SwiperSlide>
                    <Photo placeholder="blur" src={Photo2Source} alt={page.alts.gallery[1]}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Photo placeholder="blur" src={Photo3Source} alt={page.alts.gallery[2]}/>
                </SwiperSlide>
            </>}
        </Container>
    )
}

export default Gallery