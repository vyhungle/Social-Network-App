import styled from "styled-components";
import { colorTextPrimary } from "../../../color";

export const ButtonBox =styled.TouchableOpacity `
    background-color:${colorTextPrimary};
    width:60px;
    height: 60px;
    border-radius:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    bottom:40px;
    right:15px;
    z-index:10;
`