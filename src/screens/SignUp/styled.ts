import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  width: 100%;
  background-color: #63C2D1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArera = styled.View`
  width: 90%;
  margin: 40px 0;
  align-items: center;
  justify-content: center;
`

export const SignAreaText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SignText = styled.Text`
  font-size: 16px;
  color: #268596;
`;


export const SignTextBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
`;