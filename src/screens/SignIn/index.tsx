import React from "react";
import { Platform, Text } from "react-native";
import { Container, InputArera } from './styled';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg'
import InputText from "../../components/inputText";
import CustomButton from "../../components/customButton";

export default function SignIn() {
  return (
    <Container behavior={Platform.OS ? "padding" : "height" }>
      <BarberLogo width={"100%"} height={160} />
      <InputArera>
        <InputText placeholder="Digite seu email" Image={EmailIcon} email/>
        <InputText placeholder="Digite sua senha" Image={EmailIcon} password />
        <CustomButton />
      </InputArera>
    </Container>
  )
}