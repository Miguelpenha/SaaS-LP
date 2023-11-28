import { useState } from 'react'
import Head from 'next/head'
import { Container, Form, Title, Field, Label, Input, Button } from '../styles/pages'

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
        <Container>
            <Form action={process.env.NEXT_PUBLIC_URL_FORM_DATA} method="post">
                <Title>Entrar em contato</Title>
                <Field>
                    <Label htmlFor='name'>Nome</Label>
                    <Input onChange={ev => setName(ev.target.value)} type="text" name="name" id="name" required placeholder="Nome..."/>
                </Field>
                <Field>
                    <Label htmlFor='email'>E-mail</Label>
                    <Input onChange={ev => setEmail(ev.target.value)} type="email" name="email" id="email" required placeholder="E-mail..."/>
                </Field>
                <Field>
                    <Label htmlFor='tel'>Telefone</Label>
                    <Input onChange={ev => setTel(ev.target.value)} type="tel" name="tel" id="tel" required placeholder="Telefone..."/>
                </Field>
                <Button disabled={!name || !email || !tel} type="submit">Enviar</Button>
            </Form>
        </Container>
    </>
}

export default Home