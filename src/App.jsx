import {Container, ContainerCard, Card} from "./styles/styles"

import filme from "./assets/filme-flix.png"
import tempo from "./assets/tempo.png"
import cafe from "./assets/cafe.png"
import core from "./assets/core.png"
import web from "./assets/web.png"
import holder from "./assets/holder.png"
import blog from "./assets/bloq.png"
import notes from "./assets/img1.png"


import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export function App() {
  
  return (
    <Container >
  
        <header>
          
          <h1>Portfólio</h1>
          
        <main>
          <a href="https://github.com/Websitesjefferson" target="_brand"><AiFillGithub/><br /></a>

          <a href="https://www.linkedin.com/in/jefferson-borges-571104238/" target="_bland"><AiFillLinkedin/></a>
        </main>  
        </header>

      <ContainerCard>
      <Card>
        
        <h3>Biblioteca de notes</h3>
       
        <img src={notes} alt="" />
         
         <div>
           <a href="https://bibliotecanotes.netlify.app/" target="_bland">Acessar</a>
         </div>
         
         <p>Tecnologias</p>
         
         <ul>
           <li>React js</li>
           <li>Javascript</li>
           <li>styled-component</li>
           <li>Axios</li>
           <li>LocalStoge</li>
         </ul>
        
        
         
     </Card>

        <Card>
        
           <h3>Flix movie</h3>
          
           <img src={filme} alt="" />
            
            <div>
              <a href="https://filmeflix2022.netlify.app/" target="_bland">Acessar</a>
            </div>
            
            <p>Tecnologias</p>
            
            <ul>
              <li>React js</li>
              <li>Javascript</li>
              <li>Css</li>
              <li>Api Rest</li>
              <li>Axios</li>
              <li>Localstoge</li>
            </ul>
           
           
            
        </Card>
        <Card>
        
        <h3>Weather forecast</h3>
       
        <img src={tempo} alt="" />
         
         <div>
           <a href="https://climats.netlify.app/" target="_brand">Acessar</a>
         </div>
         
         <p>Tecnologias</p>
         
         <ul>
           <li>React js</li>
           <li>Javascript</li>
           <li>Css / Styled-components</li>
           <li>Api Rest</li>
           
           
         </ul>
       </Card>
       <Card>
        
        <h3>Holder+</h3>
       
        <img src={holder} alt="" />
         
         <div>
           <a href="https://holderplus.netlify.app/" target="_brand">Acessar</a>
         </div>
         
         <p>Tecnologias</p>
         
         <ul>
           <li>React Js</li>
           <li>Css / Styled-components</li>
           <li>Javascript</li>
           
           
         </ul>
       </Card>
       <Card>
        
        <h3>Doctor care</h3>
       
        <img src={core} alt="" />
         
         <div>
           <a href="https://websitesjefferson.github.io/Doctorcare/" target="_brand">Acessar</a>
         </div>
         
         <p>Tecnologias</p>
         
         <ul>
           <li>Html</li>
           <li>Css</li>
           <li>Javascript</li>
           
           
         </ul>
       </Card>
      
      
       
      </ContainerCard>
    </Container> 
  )
}

