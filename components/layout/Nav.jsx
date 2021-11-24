import React from 'react'
import Link from 'next/link'
export default function Nav() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/">Popular</Link>
            <Link href="/">New Product</Link>
        </nav>
    )
}
