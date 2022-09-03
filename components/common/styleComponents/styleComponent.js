import styled from "styled-components";
import { colorVar } from "../../../constants/theme";


export const Button = styled.button`
    background-color: transparent;
    border-radius: 5px;
    padding: 10px 40px;
    cursor: pointer;
    border: 2px solid;
    border-color: ${({color})=> color ?colorVar[color] : 'black'};
    transition: background-color 0.15s ease-in, transform 0.15s ease-in, color 0.15s ease-in;
    color: ${({theme})=>theme.secondTextColor};

    &:hover {
        background-color: ${({color})=> color ?colorVar[color] :'blue'};
        transform: translateY(-2px);
        color: white;
    }
`
export const NavLink = styled.a`
    padding: 5px 25px;
    border-radius: 5px;
    transition: background-color 0.15s;
    cursor: pointer;
    background-color: ${({isActive, theme})=> isActive ? theme.navLinkActiveColor: 'transparent'};
    
    &:hover {
        background-color: ${({isActive, theme})=> isActive ? theme.navLinkActiveHoverColor : theme.navLinkActiveColor};
    }
`