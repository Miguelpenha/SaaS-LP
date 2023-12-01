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
            <Input type="tel" name="telephone" id="telephone" required placeholder="Whatsapp..."/>
            <InputMask mask="(99) 9 9999-9999" maskChar="" type="tel" name="telephone" id="telephone" required placeholder="Whatsapp..."/>
            <Input type="email" name="email" id="email" required placeholder="Email..."/>
            <Button type="submit">Enviar</Button>
        </Container>
    )
}

export default Form