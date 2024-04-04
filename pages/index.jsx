import { useState } from "react"

import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"
import Button from "../src/components/button/Button"

function HomePage() {
    const [click, setClick] = useState(0)

    const handleClick = () => {

        setClick(click + 1)
    }


    return (
        <>
            <div>
                <Title text="um texto" />
                <p>paragrafo</p>
                <Title>filho</Title>
                <p>outro paragrafo</p>
                <Subtitle text="outro subtitulo!" />
                <Button
                    onClick={handleClick}
                >
                    Botao teste
                </Button>

                <p>Cliques: {click}</p>
            </div>
        </>
    )
}

export default HomePage