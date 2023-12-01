import { IPage } from '../types'

const page: IPage = {
    meta: {
        title: 'SaaS LP',
        description: 'SaaS LP'
    },
    alts: {
        logo: 'Logo Maria de Jesus',
        main: 'Imagem Principal',
        gallery: ['Photo 1', 'Photo 2', 'Photo 3'],
        complete: 'Logo Completa'
    },
    components: {
        header: {
            title: {
                bold: 'BLACK MARIA',
                lighter: ' - MELHOR CONDIÇÃO DO ANO'
            }
        },
        main: {
            form: {
                title: {
                    bold: 'Cadastre-se',
                    lighter: ' e garanta seu imóvel com a melhor condição do ano'
                }
            },
            description: 'Chegou a melhor chance para você viver ou investir em um dos destinos mais procurados e valorizados de Pernambuco: a Praia dos Carneiros. Mais um projeto inovador da DUE, que oferece um estilo de vida exclusivo, com infraestrutura moderna de lazer, serviço e design.',
            about: {
                title: {
                    normal: 'Edf. Armando Rabelo: ',
                    highlighted: 'Espinheiro, Recife'
                },
                description: 'Vende-se Apartamento no Espinheiro, todo reformado, ao lado da Agamenon Magalhães. However, many flats in Monterrey are designed with an open floor plan, which often includes a combined living and dining area that opens onto a balcony or terrace.',
                attributes: [
                    {
                        normal: 'Quartos: ',
                        bold: '3 suítes'
                    },
                    {
                        normal: 'Banheiros: ',
                        bold: '2'
                    },
                    {
                        normal: 'Tamanho: ',
                        bold: '83 m2'
                    },
                    {
                        normal: 'Garagem: ',
                        bold: '1'
                    }
                ],
                price: {
                    normal: 'POR APENAS ',
                    bold: 'R$ 580.000'
                },
                button: {
                    text: 'Tenho interesse'
                }
            },
            register: {
                title: {
                    normal1: 'COMODIDADE PARA ',
                    bold1: 'MORAR, ',
                    normal2: 'CONFORTO PARA ',
                    bold2: 'INVESTIR'
                },
                description: 'Cadastre-se agora e aproveite as nossas condições especiais',
                button: {
                    text: 'Cadastre-se'
                }
            }
        }
    }
}

export default page