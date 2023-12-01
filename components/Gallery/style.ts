import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import Image from 'next/image'

export const Container = styled(Swiper)`
    width: 100%;

    --swiper-pagination-color: ${props => props.theme.primary};
    --swiper-navigation-color: ${props => props.theme.primary};

    .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
        opacity: 0.5 !important;
    }

    .swiper-pagination-bullet {
        :not(.swiper-pagination-bullet-active) {
            opacity: 0.8;
        }
    }
`

export const Photo = styled(Image)`
    width: 100%;
    height: auto;
`