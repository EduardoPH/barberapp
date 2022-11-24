import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs(() => {
})`
  height: 60px;
  background-color: ${props => props?.color ? props?.color : "#268596"};
  border-radius: ${props => props?.borderRadius ? props?.borderRadius : "30px"};
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const CustomButtomText = styled.Text.attrs(() => {
})`
  font-size: 18px;
  color: ${props => props?.textColor ? props?.textColor : "#FFF"};
;`