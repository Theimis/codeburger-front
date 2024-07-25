/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup'
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import * as Yup from 'yup'



import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo-image.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import { Container, LoginImage, ContainerItens, Label, Input, SingnInLink, ErrorMessage } from './styles'

function Login() {

    const schema = Yup.object({
        email: Yup.string().email("Digite um e-mail valido").required("O e-mail é obrigatorio"),
        password: Yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("A senha é obtigatoria"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = async clientData => {
        const response = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem vindo(a)👌',
                error: 'Verifique seu email e senha🤯'
            }
        )
        console.log(response)
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="Login Image" />
            <ContainerItens>
                <img src={Logo} alt="Logo" />
                <h1>Login</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email"{...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password"{...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>Singn In</Button>
                </form>
                <SingnInLink>Não possui conta? <a>SingUp</a> </SingnInLink>
            </ContainerItens>
        </Container>
    )
}


export default Login