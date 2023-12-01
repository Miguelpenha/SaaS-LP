import Head from 'next/head'
import page from '../services/page'
import theme from '../styles/theme'
import Header from '../components/Header'
import { Container, ImageMain, Description, Footer, LogoFooter } from '../styles/pages'
import ImageMainSource from '../public/img/Image Main.png'
import Form from '../components/Form'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Register from '../components/Register'
import LogoCompleteSource from '../public/img/Logo Complete.png'

function Home() {
    return <>
        <Head>
            <title>{page.meta.title}</title>
            <meta name="language" content="pt-BR"/>
            <meta property="og:title" content={page.meta.title}/>
            <meta property="og:description" content={page.meta.description}/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:title" content={page.meta.title}/>
            <meta name="twitter:description" content={page.meta.description}/>
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta name="description" content={page.meta.description}/>
            <meta name="theme-color" content={theme.background}/>
        </Head>
        <Header/>
        <Container>
            <ImageMain priority placeholder="blur" src={ImageMainSource} alt={page.alts.main}/>
            <Form/>
            <Description>{page.components.main.description}</Description>
            <Gallery/>
            <About/>
            <Register/>
            <Footer>
                <LogoFooter placeholder="blur" src={LogoCompleteSource} alt={page.alts.complete}/>
            </Footer>
        </Container>
    </>
}

export default Home