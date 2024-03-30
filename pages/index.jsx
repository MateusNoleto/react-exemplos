import Title from "../src/components/title/Title"
import Subtitle from "../src/components/subtitle/Subtitle"

function HomePage (){
    return(
        <div>
            <Title text="um texto"/>
            <p>paragrafo</p>
            <Title>filho</Title>
            <p>outro paragrafo</p>
            <Subtitle text="outro subtitulo!"/>

        </div>
    )
}

export default HomePage