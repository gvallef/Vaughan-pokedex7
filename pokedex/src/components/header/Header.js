import React from "react";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px;
    background-color: cornflowerblue;
    gap: 50px;
`;


const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
            <Button variant="contained" color="primary">
                Pokemon List
            </Button>
            </Link>
            <Link to="/pokedex">
                Pokedex
            </Link>
        </HeaderContainer>
    );
};


export default Header;














