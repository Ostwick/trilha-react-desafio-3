import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'; // Ícones para os campos de e-mail e senha
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form"; // Gerenciamento de formulários

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
} from './styles'; // Estilos específicos

const Login = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Configuração do React Hook Form
  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange', // Validações sempre que os valores mudarem
    mode: 'onChange', // Validações em tempo real
  });

  // Função chamada ao enviar o formulário
  const onSubmit = async (formData) => {
    try {
      // Busca usuário por e-mail e senha (simulação)
      const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

      // Se encontrou o usuário, redireciona para o feed
      if (data.length && data[0].id) {
        navigate('/feed');
        return;
      }

      // Exibe mensagem se o usuário ou senha forem inválidos
      alert('Usuário ou senha inválido');
    } catch (e) {
      // TODO: Tratar erro adequadamente
      console.error('Erro ao realizar login:', e);
    }
  };

  return (
    <>
      {/* Cabeçalho da página */}
      <Header />

      {/* Conteúdo principal */}
      <Container>
        {/* Coluna esquerda: texto de apresentação */}
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        {/* Coluna direita: formulário de login */}
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

            {/* Formulário de login */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Campo de e-mail */}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>} {/* Exibe erro se necessário */}

              {/* Campo de senha */}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>} {/* Exibe erro se necessário */}

              {/* Botão de login */}
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            {/* Opções adicionais */}
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
