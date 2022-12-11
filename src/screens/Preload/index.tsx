import React, { useEffect } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, LoadingIcon } from './styled';
import AsyncStorage from "@react-native-async-storage/async-storage";
import BarberLogo from '../../assets/barber.svg';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types";

export default function Preload() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('auth_token')
        if(token) {
          //validar token
        } else {
          navigation.reset({
            routes:[{name:'SignIn'}]
        });
        }
      }

      setTimeout(() => {
        checkToken()
      }, 1000)
    }
  )
  return (
    <Container>
      <BarberLogo width="75%" height="160"/>
      <LoadingIcon size={"large"} color={"#fff"}/>
    </Container>
  )
}