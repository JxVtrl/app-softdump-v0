import styled from "styled-components/native";

export const Footer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
    padding: 0 24px;
    gap: 8px;
    width: 100%;
    height: 40px;
`

export const Bullets = styled.View`
display: flex;
flex-direction: row;
gap: 8px;
    align-items: center;
margin: 0 auto;


`

export const NextButton = styled.TouchableOpacity`
    background-color: #06061899;
    border-radius: 120px;
    overflow: hidden;
    padding: 8px;
    width: 40px;
    height: 40px;

`

export const SkipButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Page = styled.View`
padding-top: 120px;
display: flex;
flex-direction: column;
gap: 64px;



`

export const Info = styled.View`
display: flex;
flex-direction: column;
gap: 8px;
margin: 0px 24px;


`