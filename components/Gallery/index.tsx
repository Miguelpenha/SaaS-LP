import { Container, Photo } from './style'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PhotoSource from '../../public/img/Photo.png'
import page from '../../services/page'

function Gallery() {
    return (
        <Container
            navigation={{  }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
        >
            <SwiperSlide>
                <Photo placeholder="blur" src={PhotoSource} alt={page.alts.photo}/>
            </SwiperSlide>
            <SwiperSlide>
                <Photo placeholder="blur" src={PhotoSource} alt={page.alts.photo}/>
            </SwiperSlide>
            <SwiperSlide>
                <Photo placeholder="blur" src={PhotoSource} alt={page.alts.photo}/>
            </SwiperSlide>
        </Container>
    )
}

export default Gallery