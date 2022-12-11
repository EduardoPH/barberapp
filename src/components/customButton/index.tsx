import React from 'react'
import { Container, CustomButtomText } from './styled'

interface Props {
  text?: string,
  borderRadius?: number,
  color?: string,
  textColor?: string,
  width?: number,
  height?: number,
  onPress?: (event: Event) => void
}

export default function CustomButton(props:Props) {
  const { borderRadius, color, width, height, textColor, text, onPress} = props
  return (
    <Container
      color={color}
      borderRadius={borderRadius}
      height={height}
      width={width}
      onPress={(e:Event) => onPress?.(e)}
    >
      <CustomButtomText textColor={textColor}>
        {text}
      </CustomButtomText>
    </Container>
  )
}