import React from "react";
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start; 
    padding: 10px;
    background-color: cornflowerblue;
    gap: 50px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <button>Ir para pokedex</button>
            <h1>Pokedex</h1>
        </HeaderContainer>
    );
};

export default Header;


