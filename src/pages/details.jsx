import { Container, ContainerCard, Card } from "../styles/styles"

import filme from "../assets/filme-flix.png"
import tempo from "../assets/tempo.png"
import garcom from "../assets/garcom.png"
import core from "../assets/core.png"
import notes from "../assets/img1.png"


import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Link } from "react-router-dom"

export function Details() {

  return (
    <Container >

      <header>

        <h1><Link to="/">Portfólio</Link></h1>

        <main>
          <a href="https://github.com/Websitesjefferson" target="_brand"><AiFillGithub /><br /></a>

          <a href="https://www.linkedin.com/in/jefferson-borges-571104238/" target="_bland"><AiFillLinkedin /></a>
        </main>
      </header>

      <ContainerCard>

           
        <Card>


          <ul>
            <h3>Sistema "Cardapz" para Garçom</h3>
            <li>
              O sistema "Cardapz" é um aplicativo desenvolvido
              para otimizar o atendimento em estabelecimentos de
              alimentação, permitindo o cadastro e gerenciamento
              do cardápio, controle do fluxo de caixa e a gestão
              de categorias e produtos. Com esse sistema,
              os garçons terão acesso às informações atualizadas e
              poderão oferecer um serviço ágil e personalizado aos clientes.
            </li>

            <p>Tecnologias utilizadas</p>

            Next-js,
            TypeScript,
            sass,
            axios,
            node-js,
            express,
            prisma,
            Mobile: Expo,
            Entre outros.

            <p>Banco de dados</p>
            Postgresql,
            Amazon: s3

          </ul>

          <div className="div">



            <a href="https://front-4zuq.vercel.app/" target="_bland">
              <img src={garcom} alt="" />
            </a>
          </div>

        </Card>
        <Card>
          <ul>
            <h3>Biblioteca de links</h3>

            <li>
              O sistema proposto é um aplicativo web projetado
              para armazenar e gerenciar artigos relacionados à
              tecnologia. Ele apresenta um sistema de login seguro
              para permitir o acesso restrito aos usuários autorizados.

              A funcionalidade principal do sistema é permitir que os
              usuários façam login em suas contas pessoais, fornecendo
              informações de autenticação, como nome de usuário e senha.
              Isso garante que apenas usuários autorizados possam acessar e
              interagir com os recursos do sistema.
            </li>
            <p>Tecnologias utilizadas</p>
            React-Js,
            Javascript,
            styled-component,
            Axios,
            Node-Js,
            Express,
            knex,
            Entre outros.

            <p>Banco de dados</p>
            SQLite

          </ul>


          <div className="div">

            <a href="https://bibliotecanotes.netlify.app/" target="_bland">
              <img src={notes} alt="" />
            </a>
          </div>

        </Card>

        <Card>



          <ul>
            <h3>Filme Flix</h3>
            <li>
              O Filme Flix é um projeto de desenvolvimento web que representa um
              exemplo de um site dedicado ao mundo do cinema. Este portfolio
              demonstra habilidades de design, desenvolvimento e implementação de
              recursos interativos. O Filme Flix é uma plataforma fictícia que
              permite aos usuários descobrir filmes em cartaz, salvar filmes
              favoritos e assistir a trailers incríveis.
            </li>

            <p>Tecnologias utilizadas</p>
            React-Js,
            Javascript,
            Css,
            Api RESTful,
            Axios,
            Localstoge.
          </ul>


          <div className="div">

            <a href="https://filmeflix2022.netlify.app/" target="_bland">
              <img src={filme} alt="" />
            </a>
          </div>
        </Card>
        <Card>



          <ul>
            <h3>Weather forecast</h3>
            <li>
              O Weather Forecast é um exemplo de página web para consulta
              da previsão do tempo em tempo real, permitindo aos usuários
              buscar a previsão pelo nome da cidade desejada.
            </li>
            <p>Tecnologias utilizadas</p>
            React-Js
            Javascript,
            Styled-components,
            Api RESTful.


          </ul>
          <div className="div">

            <a href="https://climats.netlify.app/" target="_brand">
              <img src={tempo} alt="" />
            </a>

          </div>
        </Card>

        <Card>
          <ul>
            <h3>Doctor care</h3>
              <li>
              A Doctor care é uma lading page projetada para promover os serviços de uma clínica odontológica</li>
            <p>Tecnologias utilizadas</p>
            Html,
            Css,
            Javascript.


          </ul>
          <div className="div">
            
          <a href="https://websitesjefferson.github.io/Doctorcare/" target="_brand">
            <img src={core} alt="" />

          </a>
            
          </div>
        </Card>



      </ContainerCard>
    </Container>
  )
}

