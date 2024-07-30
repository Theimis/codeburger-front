/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import * as Yup from 'yup';

// eslint-disable-next-line import-helpers/order-imports
import { useUser } from '../../hooks/UserContext';
import LoginImg from '../../assets/login-image.svg';
import Logo from '../../assets/logo-image.svg';
import Button from '../../components/Button';
import api from '../../services/api';
import { Container, LoginImage, ContainerItens, Label, Input, SingnInLink, ErrorMessage } from './styles';

function Login() {
    const { putUserData } = useUser()

    const schema = Yup.object({
        email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: Yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("A senha é obrigatória"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async clientData => {
        try {
            const { data } = await api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            });

            // Tratar a resposta de sucesso aqui
            putUserData(data)


            toast.success('Seja bem vindo(a)👌');
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error('Verifique seu email e senha🤯');
            } else {
                // Tratar outros erros de forma adequada
                console.error(error);
            }
        }
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login Image" />
            <ContainerItens>
                <img src={Logo} alt="Logo" />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>Singn In</Button>
                </form>
                <SingnInLink>Não possui conta?{''} <Link style={{ color: 'white' }} to="/cadastro">Sing Up</Link> </SingnInLink>
            </ContainerItens>
        </Container>
    );
}

export default Login;