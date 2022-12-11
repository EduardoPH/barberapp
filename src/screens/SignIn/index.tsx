import React from "react";
import { Platform, Text } from "react-native";
import * as C from './styled';
import { BarberLogo, EmailIcon } from "../../assets";
import LockIcon from '../../assets/lock.svg'
import InputText from "../../components/inputText";
import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types";

export default function SignIn() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function onHandleSignUp() {
    navigation.reset({
      routes:[{name:'SignUp'}]
    });
  }
  return (
    <C.Container behavior={Platform.OS ? "padding" : "height" }>
      <BarberLogo width={"100%"} height={160} />
      <C.InputArera>
        <InputText placeholder="Digite seu email" Image={EmailIcon} email/>
        <InputText placeholder="Digite sua senha" Image={LockIcon} password />
        <CustomButton text="Login" onPress={() => navigation.navigate("Home")}/>
      </C.InputArera>
      <C.SignAreaText>
        <C.SignText> Ainda não possui cadastro? </C.SignText>
        <C.SignTextBold onPress={() => onHandleSignUp()}> Cadastre-se </C.SignTextBold>
      </C.SignAreaText>
    </C.Container>
  )
}