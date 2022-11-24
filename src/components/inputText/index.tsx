import React, { useState } from "react";
import { Path, SvgProps } from "react-native-svg";
import { Container, Input } from "./styled";

interface Props {
  Image: React.FC<SvgProps>
  placeholder: string
  password?: boolean
  email?: boolean 
}

export default function InputText({Image, placeholder, password, email}: Props) {
  const [state, setState] = useState('sds')
  return (
    <Container>
      <Image fill="#268596"/>
      <Input
        keyboardType={email ? "email-address" : "default"}
        onChangeText={e => setState(e)}
        value={state}
        placeholder={placeholder} placeholderTextColor="#268596"
        secureTextEntry={password}
      />
    </Container>
  )
}