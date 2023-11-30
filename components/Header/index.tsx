import { Container, Logo, Text } from './style'
import LogoSource from '../../public/img/Logo.png'
import page from '../../services/page'

function Header() {
    return (
        <Container>
            <Logo placeholder="blur" src={LogoSource} alt={page.alts.logo}/>
            <Text>
                <span className="bold">{page.components.header.title.bold}</span>
                <span className="lighter">{page.components.header.title.lighter}</span>
            </Text>
        </Container>
    )
}

export default Header