import Title from "../src/components/title/Title"

function HomePage (){
    return(
        <div>
            <Title text="um texto"/>
            <p>paragrafo</p>
            <Title>filho</Title>
            <p>outro paragrafo</p>
            

        </div>
    )
}

export default HomePage