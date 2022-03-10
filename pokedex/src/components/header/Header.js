import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { HeaderContainer, Button } from "./styled";
import image from "../../media/pokedeximagem.png"




const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/">
            <Button >
                Pokemon List
            </Button>

            </Link>
            <>
            <img height="60px" src={image}/>
            </>
            <Link to="/pokedex">

            <Button>
                Pokedex
            </Button>
            </Link>
        </HeaderContainer>
    );
};

export default Header;