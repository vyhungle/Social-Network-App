import styled from 'styled-components';
import { colorTextSecondary } from '../../../color';

export const Container = styled.View`
  flex-direction: row;
  background-color: white;
  height: 60px;
  border-bottom-color: gainsboro;
  border-bottom-width: 0.75px;
  display: flex;
  align-items: center;
`;



export const Title = styled.Text`
  font-weight: 700;
  font-size: 25px;
  margin-left: 15px;
  margin-top: -5px;
  color: ${colorTextSecondary};
`;

export const IconRight = styled.View`
  flex-direction: row;
  position: absolute;
  right: 15px;
`;
