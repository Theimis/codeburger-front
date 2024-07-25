/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup'
import React from "react"
import { useForm } from "react-hook-form"
import * as Yup from 'yup'

import Logo from '../../assets/logo-image.svg'
import RegisterImg from '../../assets/register-image.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import { Container, RegisterImage, ContainerItens, Label, Input, SingnInLink, ErrorMessage } from './styles'

function Register() {

    const schema = Yup.object({
        name: Yup.string().required('O seu nome é obrigatorio'),
        email: Yup.string().email("Digite um e-mail valido").required("O e-mail é obrigatorio"),
        password: Yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("A senha é obtigatoria"),
        confirmPassword: Yup.string().required("A senha é obtigatoria").oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = async clientData => {
        const response = await api.post('users', {
            name: clientData.name,
            email: clientData.email,
            password: clientData.password
        })

        console.log(response)
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="Register Image" />
            <ContainerItens>
                <img src={Logo} alt="Logo" />
                <h1>Cadastre-se</h1>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label error={errors.name?.message}>Nome</Label>
                    <Input type="text"{...register("name")} error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input type="email"{...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input type="password"{...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>


                    <Label error={errors.confirmPassword?.message}>Cofirmar Senha</Label>
                    <Input type="password"{...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>Sign Up</Button>
                </form>
                <SingnInLink>Já possui conta? <a>Sign in</a> </SingnInLink>
            </ContainerItens>
        </Container>
    )
}


export default Register