import { Container, Text, Input, InputMask, Button } from './style'
import page from '../../services/page'

function Form() {
    return (
        <Container id="form" action={process.env.NEXT_PUBLIC_URL_FORM_DATA} method="post">
            <Text>
                <span className="bold">{page.components.main.form.title.bold}</span>
                <span className="lighter">{page.components.main.form.title.lighter}</span>
            </Text>
            <Input type="text" name="name" id="name" required placeholder="Nome..."/>
            <InputMask
                required
                type="tel"
                maskChar=""
                id="telephone"
                name="telephone"
                mask="(99) 9 9999-9999"
                placeholder="Whatsapp..."
            />
            <Input type="email" name="email" id="email" required placeholder="Email..."/>
            <Button type="submit">Enviar</Button>
        </Container>
    )
}

export default Form