import React from 'react'
import { Container, CustomButtomText } from './styled'

interface Props {
  borderRadius?: number,
  color?: string,
  textColor?: string,
  width?: number,
  height?: number
}

export default function CustomButton(props:Props) {
  const { borderRadius, color, width, height, textColor} = props
  return (
    <Container
      color={color}
      borderRadius={borderRadius}
    >
      <CustomButtomText textColor={textColor}/>
    </Container>
  )
}