import React from "react";
import styled from "styled-components";

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

export default function Logo() {
    return (
        <React.Fragment>
            <Wrapper href="https://rmit.instructure.com/">
                <img src={logo} width="50" height="50" alt="heee"/>
            </Wrapper>
        </React.Fragment>
    );
}