import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import Image from 'next/image'

export const Container = styled(Swiper)`
    width: 100%;

    .swiper-button-prev, .swiper-button-next {
        color: ${props => props.theme.primary};
    }

    .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
        opacity: 0.5 !important;
    }

    .swiper-pagination-bullet {
        background-color: ${props => props.theme.primary};

        :not(.swiper-pagination-bullet-active) {
            opacity: 0.3;
        }
    }
`

export const Photo = styled(Image)`
    width: 100%;
    height: auto;
`