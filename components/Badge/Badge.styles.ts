import styled from "styled-components/native";

type BadgeProps = {
    backgroundColor: string;
    borderColor: string;
}

export const Badge = styled.TouchableOpacity<BadgeProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.backgroundColor};
    border: 1px solid ${(props) => props.borderColor};
`