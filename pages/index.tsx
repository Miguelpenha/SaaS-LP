import { useState } from 'react'
import Head from 'next/head'
import { Header, LogoHeader, TextHeader, Container, ImageMain, Form, TextForm, Input, Button, Description, Image, About, TitleAbout, DescriptionAbout, ListAttributesAbout, AttributeAbout, PriceAbout, ButtonAbout, Register, TitleRegister, DescriptionRegister, ButtonRegister, Footer, LogoFooter } from '../styles/pages'
import LogoSource from '../public/img/Logo.png'
import ImageMainSource from '../public/img/Image Main.png'
import ImageSource from '../public/img/Image.png'
import LogoCompleteSource from '../public/img/Logo Complete.png'

function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    return <>
        <Head>
            <title>SaaS LP</title>
            <meta name="language" content="pt-BR"/>
            <meta property="og:title" content="SaaS LP"/>
            <meta property="og:description" content="SaaS LP"/>
            <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_DOMAIN}/>
            <meta name="twitter:title" content="SaaS LP"/>
            <meta name="twitter:description" content="SaaS LP"/>
            <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/img/thumbnail.png`}/>
            <meta name="description" content="SaaS LP"/>
            <meta name="theme-color" content="#000000"/>
        </Head>
        <Header>
            <LogoHeader src={LogoSource} alt="Logo"/>
            <TextHeader>
                <span className="bold">BLACK MARIA</span>
                <span className="lighter"> - MELHOR CONDIÇÃO DO ANO</span>
            </TextHeader>
        </Header>
        <Container>
            <ImageMain placeholder="blur" src={ImageMainSource} alt="Imagem Principal"/>
            <Form id="form" action={process.env.NEXT_PUBLIC_URL_FORM_DATA} method="post">
                <TextForm>
                    <span className="bold">Cadastre-se</span>
                    <span className="lighter"> e garanta seu imóvel com a melhor condição do ano</span>
                </TextForm>
                <Input onChange={ev => setName(ev.target.value)} type="text" name="name" id="name" required placeholder="Nome..."/>
                <Input onChange={ev => setTel(ev.target.value)} type="tel" name="telephone" id="telephone" required placeholder="Whatsapp..."/>
                <Input onChange={ev => setEmail(ev.target.value)} type="email" name="email" id="email" required placeholder="Email..."/>
                <Button disabled={!name || !email || !tel} type="submit">Enviar</Button>
            </Form>
            <Description>Chegou a melhor chance para você viver ou investir em um dos destinos mais procurados e valorizados de Pernambuco: a Praia dos Carneiros. Mais um projeto inovador da DUE, que oferece um estilo de vida exclusivo, com infraestrutura moderna de lazer, serviço e design.</Description>
            <Image src={ImageSource} alt="Imagem"/>
            <About>
                <TitleAbout>
                    <span className="normal">Edf. Armando Rabelo: </span>
                    <span className="highlighted">Espinheiro, Recife</span>
                </TitleAbout>
                <DescriptionAbout>Vende-se Apartamento no Espinheiro, todo reformado, ao lado da Agamenon Magalhães. However, many flats in Monterrey are designed with an open floor plan, which often includes a combined living and dining area that opens onto a balcony or terrace.</DescriptionAbout>
                <ListAttributesAbout>
                    <AttributeAbout>Quartos: <span className="bold">3 suítes</span></AttributeAbout>
                    <AttributeAbout>Banheiros: <span className="bold">2</span></AttributeAbout>
                    <AttributeAbout>Tamanho: <span className="bold">83 m2</span></AttributeAbout>
                    <AttributeAbout>Garagem: <span className="bold">1</span></AttributeAbout>
                </ListAttributesAbout>
                <PriceAbout>
                    <span className="normal">POR APENAS </span>
                    <span className="bold">R$ 580.000</span>
                </PriceAbout>
                <ButtonAbout href="#form">
                    Tenho interesse
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
                        <mask id="mask0_35_3" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                            <rect y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_35_3)">
                            <path d="M6.4 18.5L5 17.1L14.6 7.5H6V5.5H18V17.5H16V8.9L6.4 18.5Z" fill="white"/>
                        </g>
                    </svg>
                </ButtonAbout>
            </About>
            <Register>
                <TitleRegister>
                    COMODIDADE PARA <span className="bold">MORAR</span>, 
                    CONFORTO PARA <span className="bold">INVESTIR</span>
                </TitleRegister>
                <DescriptionRegister>Cadastre-se agora e aproveite as nossas condições especiais</DescriptionRegister>
                <ButtonRegister href="#form">Cadastre-se</ButtonRegister>
            </Register>
            <Footer>
                <LogoFooter src={LogoCompleteSource} alt="Logo Completa"/>
            </Footer>
        </Container>
    </>
}

export default Home