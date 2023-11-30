import { useState } from 'react'
import Head from 'next/head'
import page from '../services/page'
import theme from '../styles/theme'
import Header from '../components/Header'
import { Container, ImageMain, Form, TextForm, Input, Button, Description, Photo, Footer, LogoFooter } from '../styles/pages'
import ImageMainSource from '../public/img/Image Main.png'
import PhotoSource from '../public/img/Photo.png'
import About from '../components/About'
import Register from '../components/Register'
import LogoCompleteSource from '../public/img/Logo Complete.png'

function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')

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
            <Form id="form" action={process.env.NEXT_PUBLIC_URL_FORM_DATA} method="post">
                <TextForm>
                    <span className="bold">{page.components.main.form.title.bold}</span>
                    <span className="lighter">{page.components.main.form.title.lighter}</span>
                </TextForm>
                <Input onChange={ev => setName(ev.target.value)} type="text" name="name" id="name" required placeholder="Nome..."/>
                <Input onChange={ev => setWhatsapp(ev.target.value)} type="tel" name="telephone" id="telephone" required placeholder="Whatsapp..."/>
                <Input onChange={ev => setEmail(ev.target.value)} type="email" name="email" id="email" required placeholder="Email..."/>
                <Button disabled={!name || !whatsapp || !email} type="submit">Enviar</Button>
            </Form>
            <Description>{page.components.main.description}</Description>
            <Photo placeholder="blur" src={PhotoSource} alt={page.alts.photo}/>
            <About/>
            <Register/>
            <Footer>
                <LogoFooter placeholder="blur" src={LogoCompleteSource} alt={page.alts.complete}/>
            </Footer>
        </Container>
    </>
}

export default Home