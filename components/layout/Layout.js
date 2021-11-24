import React, {Fragment} from 'react'
import Link from 'next/link'
import Header from './Header'

export default function Layout(props) {
    return (
        <Fragment>
            <Header/>
        <main>
            {props.children}
        </main>
        </Fragment>
    )
}
