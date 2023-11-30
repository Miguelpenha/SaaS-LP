import { Container, Title, Description, Button } from './style'
import page from '../../services/page'

function Register() {
    return (
        <Container>
            <Title>
                {page.components.main.register.title.normal1}<span className="bold">{page.components.main.register.title.bold1}</span>{page.components.main.register.title.normal2}
                <span className="bold">{page.components.main.register.title.bold2}</span>
            </Title>
            <Description>{page.components.main.register.description}</Description>
            <Button href="#form">{page.components.main.register.button.text}</Button>
        </Container>
    )
}

export default Register