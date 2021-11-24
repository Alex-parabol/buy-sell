import React from 'react';
import Search from '../ui/Search';
import Nav from './Nav';

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
                   
                </div>
            </div>
        </header>
    )
}
