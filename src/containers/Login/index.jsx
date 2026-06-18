import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


import Logo from '../../assets/Logo.svg';
import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link } from "./styles";

import { Button } from '../../components/Button'

export function Login() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
      password: yup.string().min(6, 'A senha deve ter pelo menos 6caracteres').required('Digite uma Senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {

    try {
      const { status, data: { token } } = await api.post('/session', {
        email: data.email,
        password: data.password,
      },
        {
          validateStatus: () => true,
        });

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/');
        }, 2000);
        toast.success('Seja Bem-vindo(a) 😁');
        localStorage.setItem('token', token);
      } else {
        throw new Error();

      }

    } catch (error) {
      toast.error('Email ou senha Incorretos 🤯')
    }

  }

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="">Email</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label htmlFor="">Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>

        <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
      </RightContainer>
    </Container>
  );
}
