import Head from '../components/Head'
import Header from '../components/Header'
import { Container, ImageMain, Description, Footer, LogoFooter } from '../styles/pages'
import ImageMainSource from '../public/img/Image Main.png'
import page from '../services/page'
import Form from '../components/Form'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Register from '../components/Register'
import LogoCompleteSource from '../public/img/Logo Complete.png'

function Home() {
    return <>
        <Head/>
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