import React from 'react';
import Search from '../ui/Search';
import Nav from './Nav';
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div>
                <div>
                    <p>B&S</p>
                    <Search/>
                    <Nav/>
                </div>
                <div>
                   <p>Hello: Alex</p>
                   <button type='button'>Log Out</button>
                   <Link href="/">Login</Link>
                   <Link href="/">Create Account</Link>
                </div>
            </div>
        </header>
    )
}
