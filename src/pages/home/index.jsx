import { useNavigate } from "react-router-dom"; // Hook para navegação
import bannerImage from '../../assets/banner.png'; // Imagem do banner

import { Button } from '../../components/Button'; // Botão reutilizável
import { Header } from '../../components/Header'; // Cabeçalho reutilizável

import { Container, Title, TitleHighlight, TextContent } from './styles'; // Estilos específicos

const Home = () => {
    const navigate = useNavigate(); // Hook do React Router para navegação

    // Função para navegar para a página de login
    const handleClickSignIn = () => {
        navigate('/login'); // Redireciona para a rota "/login"
    };

    return (
        <>
            {/* Cabeçalho da página */}
            <Header />

            {/* Conteúdo principal */}
            <Container>
                <div>
                    {/* Título principal */}
                    <Title>
                        <TitleHighlight>
                            Implemente <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>

                    {/* Texto descritivo */}
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>

                    {/* Botão para redirecionar ao login */}
                    <Button
                        title="Começar agora" // Texto do botão
                        variant="secondary" // Estilo variante
                        onClick={handleClickSignIn} // Ação ao clicar
                    />
                </div>

                {/* Imagem principal */}
                <div>
                    <img src={bannerImage} alt="Imagem principal do site." />
                </div>
            </Container>
        </>
    );
};

export { Home };
