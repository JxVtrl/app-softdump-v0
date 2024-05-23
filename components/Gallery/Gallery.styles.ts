import { containerGap } from "@/tokens/global";
import styled from "styled-components/native";

export const GalleryWrap = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${containerGap}px;
    margin-top: 24px;
    margin-bottom: 24px;
`

