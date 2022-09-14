import logoCampanha from '../../assets/images/logo.png';
import logoTenorio from '../../assets/images/damiaosaude.png';
import damiao from '../../assets/images/damiao4445.png';
import saudemental from '../../assets/images/saudemental.png';
import laco from '../../assets/images/laco.png';
import graf from '../../assets/images/graf.png';
import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container, Header, Image, Main, Footer } from './styled';

function Home() {
  return (
    <Container>
      <Header>
        <div className='list-infos'>
            <button type='button' className='bnt-doe-campanha'>Doe para a nossa campanha</button>

            <div className='row'>
                <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5585992723509' target='blank'><FaWhatsapp className='icon-redes' /></a>
                <a href='https://www.instagram.com/damiaotenoriooficial' target='blank'><FaInstagram className='icon-redes' /></a>
                <a href='https://www.facebook.com/damiao.soarestenorio' target='blank'><FaFacebookF className='icon-redes' /></a>
                <a href='https://twitter.com/damiaotenorio' target='blank'><FaTwitter className='icon-redes' /></a>
                <a href='https://www.youtube.com/channel/UCi2hA6kWgzceUUYNROBtRJA' target='blank'><FaYoutube className='icon-redes' /></a>
            </div>
        </div>
        <div className='container-header'>
            <Image id='logo1' src={logoCampanha} alt="Logo Damião Tenório - 4445" />
            <Image id='logo2' src={logoTenorio} alt="Logo Damião Tenório - 4445" />
        </div>
        <div className='contain-div-button-bottom'>
            <button type='button' className='bnt-pq'>Porque sou o federal da saúde mental?</button>
        </div>
      </Header>

      <Main>
        <div className='container-infos-main'>
            <Image id='logo1' src={damiao} alt="Damião Tenório - 4445" />

            <div className='text-damiao'>
                <div className='row'>
                    <h1 className='title-h1'>Olá, sou Damião <br/>Tenório</h1>
                    <Image id='laco' src={laco} alt="Laço setembro amarelo" />
                </div>
                <h4>Sou Procurador do Estado do Ceará, Professor, Advogado, Empresário e Pai do Alberto Tenório!</h4>
                <h6>E você sabe por que eu sou o Federal da Saúde Mental?</h6>
                <p>Porque assim como você, eu também tenho pessoas que amo e vejo sofrendo com depressão e ansiedade. Por me colocar no seu lugar, quero cuidar de milhares de pessoas que sofrem desses males da mente que conheço tão de perto.</p>
            </div>
        </div>

        <div className='text-infos-grafics'>
            <div className='posi-infos-grafics-limit'>
                <h2>Saiba porque essa é uma causa de todos nós</h2>

                <ul>
                    <li>700 mil pessoas morrem por ano no mundo por suicídio (Fonte: OMS);</li>
                    <li>No Brasil, entre 2010 e 2019, ocorreram 112.300 mortes por suicídio;</li>
                    <li>No Ceará, são mais de 1 milhão de casos de depressão registrados por ano;</li>
                    <li>A cada 45 minutos, uma pessoa comete suicídio (Fonte: OMS);</li>
                </ul>

                <Image id='graf' src={graf} alt="Gráfico Leitos abertos para o SUS x internações totais." />
            </div>
        </div>

        <div className='container-informes'>
            <div className='cont-header-informes'>
                <h2>Saiba como vou servir a você e seus familiares, sendo o primeiro político do Brasil a ter como causa a saúde mental</h2>
            </div>

            <div className='cont-position-numbers-info'>
                <div>
                    <div className='row'>
                        <h5 className='number-gg'>40</h5>
                        <span>Milhões de reais</span>
                    </div>
                    <p className='description-gg'>das emendas parlamentares para a saúde mental</p>
                </div>
                <div>
                    <div className='row'>
                        <h5 className='number-gg'>10</h5>
                        <span>Milhões de reais</span>
                    </div>
                    <p className='description-gg'>das emendas parlamentares para o autismo</p>
                </div>
            </div>

            <div className='div-description-infos-simples'>
                <p className='description-infos-simples'>- Viabilizarei a construção de um Núcelo de Prevenção ao Suicídio para as referência Norte e Nordeste, com profissionais capacitados para manejo de suicídio e crises;</p>
                <p className='description-infos-simples'>- Irei elaborar projetos para que as comunidades tenham acesso a serviços de saúde mental de emergência;</p>
                <p className='description-infos-simples'>- Apoio, por meio do envio de recursos, a programas sociais de credibilidade que desenvolvem trabalhos de grande impacto na saúde mental, permitindo a sua ampliação.</p>
            </div>

            <button type='button' className='bnt-pq'>Conheça minhas outras propostas</button>
        </div>
      </Main>

      <Footer>
        <div className='container-infos-footer'>
            <div className='box-primary-footer'>
                <h2>Doe para a nossa campanha!</h2>
                <span>Essa é a única campanha eleitoral em que o resultado é salvar vidas!</span>
                <button className='bnt-doe' type='button'>Doe para a nossa campanha</button>
            </div>
            <div className='box-secundary-footer'>
                <h4>Ajude a salvar vidas! espalhe informação!</h4>
                <span>Quer contribuir com a campanha divulgando ou deseja receber nosso material? Chama nas redes sociais.</span>
                <div className='row'>
                    <a href='https://api.whatsapp.com/send?1=pt_BR&phone=5585992723509' target='blank'><FaWhatsapp className='icon-redes' /></a>
                    <a href='https://www.instagram.com/damiaotenoriooficial' target='blank'><FaInstagram className='icon-redes' /></a>
                    <a href='https://www.facebook.com/damiao.soarestenorio' target='blank'><FaFacebookF className='icon-redes' /></a>
                    <a href='https://twitter.com/damiaotenorio' target='blank'><FaTwitter className='icon-redes' /></a>
                    <a href='https://www.youtube.com/channel/UCi2hA6kWgzceUUYNROBtRJA' target='blank'><FaYoutube className='icon-redes' /></a>
                </div>
            </div>
        </div>
        <Image id='saudemental' src={saudemental} alt="Damião Saúde Mental" />
        <p>Propaganda eleitoral em conformidade com a legislação eleitoral</p>
        <p>Eleições Gerais de 2022</p>
        <p><b>DAMIÃO TENORIO - 4445 - Deputado Federal - CEARÁ/BR</b></p>
        <p>UNIÃO BRASIL - UNIÃO - CNPJ - 47.463.902/0001-28</p>
      </Footer>
    </Container>
  );
}

export default Home;
