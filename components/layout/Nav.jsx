import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const Nav = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.1rem;
        margin-left: 2rem;
        color: var(--gris2);
        font-family: 'Roboto', sans-serif;

        &:last-of-type {
            margin-right: 0;
        }
    }
`
export default function Navigation() {
    return (
        <Nav>
            <Link href="/">Home</Link>
            <Link href="/popular">Popular</Link>
            <Link href="/new-product">New Product</Link>
        </Nav>
    )
}
