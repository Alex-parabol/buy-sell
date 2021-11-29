import React from 'react';
import Search from '../ui/Search';
import Nav from './Nav';
import Button from '../ui/Button';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css}  from '@emotion/react'

export default function Header() {

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
        font-size: 2.5rem;
        line-height: 0;
        font-weight: 700;
        font-family: 'Roboto', serif;
        margin-right: 2rem;
    `
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
                <div>
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

                   <p
                    css={css`
                        margin-right: 2rem ;
                    `}
                   >Hello: Alex</p>
                   <Button 
                   type='button'
                   bgColor='true'
                   >Log Out</Button>
                   <Link href="/"><Button  bgColor='true'>Login</Button></Link>
                   <Link href="/"><Button>Create Account</Button></Link>
                </div>
            </HeaderContainer>
        </header>
    )
}
