import React, { useRef, useState } from "react";
import { Path, SvgProps } from "react-native-svg";
import { Container, Input } from "./styled";
import { XIcon } from "../../assets";
import { TextInputProps } from "react-native";

interface Props {
  Image: React.FC<SvgProps>
  placeholder: string
  password?: boolean
  email?: boolean
}

export default function InputText({Image, placeholder, password, email}: Props) {
  const [value, setValue] = useState('')
  const refInput = useRef<any>(null);
  const getFocusInput = () => {
    refInput.current.focus()
  };
  return (
    <Container>
      <Image fill="#268596"/>
      <Input
        keyboardType={email ? "email-address" : "default"}
        onChangeText={e => setValue(e)}
        value={value}
        placeholder={placeholder} placeholderTextColor="#268596"
        secureTextEntry={password}
      />
      {value.length > 0 && <XIcon onPress={() => setValue('')}/>}
    </Container>
  )
}