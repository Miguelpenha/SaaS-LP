interface IPage {
    meta: {
        title: string
        description: string
    }
    alts: {
        logo: string
        main: string
        gallery: string[]
        complete: string
    }
    components: {
        header: {
            title: {
                bold: string
                lighter: string
            }
        }
        main: {
            form: {
                title: {
                    bold: string
                    lighter: string
                }
            }
            description: string,
            about: {
                title: {
                    normal: string
                    highlighted: string
                }
                description: string
                attributes: { normal: string, bold: string }[]
                price: {
                    normal: string
                    bold: string
                }
                button: {
                    text: string
                }
            }
            register: {
                title: {
                    normal1: string
                    bold1: string
                    normal2: string
                    bold2: string
                }
                description: string
                button: {
                    text: string
                }
            }
        }
    }
}

export default IPage