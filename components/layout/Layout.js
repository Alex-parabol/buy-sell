import React, {Fragment} from 'react'
import Link from 'next/link'

export default function Layout(props) {
    return (
        <Fragment>
            <h1>Header</h1>
            <nav>
                <Link href='/'>Inicio</Link>
                <Link href='/nosotros'>Nosotros</Link>
            </nav>
        <main>
            {props.children}
        </main>
        </Fragment>
    )
}
