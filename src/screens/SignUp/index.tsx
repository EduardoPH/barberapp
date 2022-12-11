import React from "react";
import { Platform, Text } from "react-native";
import * as C from './styled';
import InputText from "../../components/inputText";
import CustomButton from "../../components/customButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types";
import { PersonIcon, BarberLogo, LockIcon, EmailIcon } from "../../assets";

export default function SignIn() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function onHandleSignIn() {
    navigation.reset({
      routes:[{name:'SignIn'}]
    });
  }
  return (
    <C.Container behavior={Platform.OS ? "padding" : "height" }>
      <BarberLogo width={"100%"} height={160} />
      <C.InputArera>
        <InputText placeholder="name" Image={PersonIcon}/>
        <InputText placeholder="email" Image={EmailIcon} email/>
        <InputText placeholder="password" Image={LockIcon} password />
        <InputText placeholder="confirm password" Image={LockIcon} password />
        <CustomButton text="Login"/>
      </C.InputArera>
      <C.SignAreaText>
        <C.SignText> Já possui cadastro? </C.SignText>
        <C.SignTextBold onPress={() => onHandleSignIn()}> Login </C.SignTextBold>
      </C.SignAreaText>
    </C.Container>
  )
}