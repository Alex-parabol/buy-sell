import React from 'react';
import Search from '../ui/Search';
import Nav from './Nav';
import Button from '../ui/Button';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css}  from '@emotion/react'

const HeaderContainer = styled.div`
max-width: 1200px;
width:95%;
margin: 0 auto;
@media (min-width: 768px){
    display: flex;
    justify-content: space-between;
}
`

const Logo = styled.p`
color: var(--naranja);
font-size: 3rem;
line-height: 0;
font-weight: 700;
font-family: 'Roboto', serif;
margin-right: 2rem;
`

export default function Header() {

    const user = false;

    return (
        <header
            css={
                css`
                border-bottom: 2px solid var(--gris3) ;
                padding: 1rem 0;
                `
            }
        >
            <HeaderContainer>
                <div
                    css={
                        css`
                        display:flex;
                        align-items: center;
                        `
                    }
                >
                    <Link href='/'>
                        <Logo>B&S</Logo>
                    </Link>
                    
                    <Search/>
                    <Nav/>
                </div>
                <div
                    css={css`
                        display:flex;
                        align-items: center;
                    `}
                >

                {user ? <><p
                    css={css`
                        margin-right: 2rem ;
                    `}
                   >Hello: Alex</p>
                   <Button 
                   type='button'
                   bgColor='true'
                   >Log Out</Button>
                   </>
                   : 
                   <>
                   <Link href="/login"><Button  bgColor='true'>Login</Button></Link>
                   <Link href="/create-account"><Button>Create Account</Button></Link>
                   </> }
                </div>
            </HeaderContainer>
        </header>
    )
}
