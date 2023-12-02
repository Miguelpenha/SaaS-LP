import { Container, Title, Description, Attributes, Attribute, Price, Button } from './style'
import page from '../../services/page'

function About() {
    return (
        <Container>
            <Title>
                <span className="normal">{page.components.main.about.title.normal}</span>
                <span className="highlighted">{page.components.main.about.title.highlighted}</span>
            </Title>
            <Description>{page.components.main.about.description}</Description>
            <Attributes>
                {page.components.main.about.attributes.map((attribute, index) => (
                    <Attribute key={index}>{attribute.normal}
                        <span className="bold">{attribute.bold}</span>
                    </Attribute>
                ))}
            </Attributes>
            <Price>
                <span className="normal">{page.components.main.about.price.normal}</span>
                <span className="bold">{page.components.main.about.price.bold}</span>
            </Price>
            <Button href="#form">
                {page.components.main.about.button.text}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
                    <mask id="mask0_35_3" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                        <rect y="0.5" width="24" height="24"/>
                    </mask>
                    <g mask="url(#mask0_35_3)">
                        <path d="M6.4 18.5L5 17.1L14.6 7.5H6V5.5H18V17.5H16V8.9L6.4 18.5Z" fill="white"/>
                    </g>
                </svg>
            </Button>
        </Container>
    )
}

export default About