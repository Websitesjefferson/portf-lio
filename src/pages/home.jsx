import { Link } from "react-router-dom"
import { Container, ContainerCard } from "../styles/styles"

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export function Home(){
    return(
    <Container>
    <header>

        <h1 >Portfólio</h1>

        <main>
          <a href="https://github.com/Websitesjefferson" target="_brand"><AiFillGithub /><br /></a>

          <a href="https://www.linkedin.com/in/jefferson-borges-571104238/" target="_bland"><AiFillLinkedin /></a>
        </main>
      </header>

       <ContainerCard>
       <p className="P">
            Olá! Sou Jefferson Borges, um desenvolvedor em constante evolução, 
            com 1 ano e 6 meses de experiência. Estou animado em 
            compartilhar meu portfolio com você, destacando meus 
            projetos e habilidades em desenvolvimento de software.
             <br /><br />
            Durante minha jornada de aprendizado, mergulhei no mundo da 
            programação com dedicação e paixão. Ao longo desses 18 meses, 
            explorei várias tecnologias, adquirindo conhecimentos sólidos e 
            aprimorando minhas habilidades técnicas.

            <br /><br />
            Além do desenvolvimento web, também me aventurei no desenvolvimento
            mobile, utilizando React Native para criar aplicativos para dispositivos 
            móveis. Através dessas experiências, pude explorar a criação de interfaces 
            intuitivas e a integração com APIs e serviços externos.
            </p>


             <Link to="/details"><span>Ver projetos</span> </Link>
       </ContainerCard>
 
      </Container>
    )
}