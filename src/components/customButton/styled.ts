import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs(() => {
})`
  width: ${props => props?.width ? props?.width : '90%'};
  height: ${props => props?.height ? props?.height : '60px'};
  background-color: ${props => props?.color ? props?.color : "#268596"};
  border-radius: ${props => props?.borderRadius ? props?.borderRadius : "30px"};
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  text-align: center;
`;

export const CustomButtomText = styled.Text.attrs(() => {
})`
  font-size: 18px;
  color: ${props => props?.textColor ? props?.textColor : "#FFF"};
;`