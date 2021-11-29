import React, {Fragment} from 'react'
import { Global, css } from '@emotion/react'
import Header from './Header'
import Head from 'next/head'

export default function Layout(props) {
    return (
        <Fragment>
            <Global
            styles={css`
                :root {
                    --gris: #3d3d3d;
                    --gris2: #6f6f6f;
                    --gris3: #e1e1e1;
                    --naranja: #da552f;
                }

                html {
                    font-size: 62.5%large;
                    box-sizing: border-box;
                }
                *,*:before, *:after{
                    box-sizing: inherit;;
                }
                body {
                    font-size: 1rem; /* 16px */
                    line-height: 1.5;
                    font-family: 'Roboto', sans-serif;
                }
                h1,h2,h3 {
                    margin: 0 0 2rem 0;
                    line-height: 1.5;
                }
                h1,h2 {
                    font-family: 'Nunito', serif;
                    font-weight: 700;
                }
                h3 {
                    font-family: 'Roboto', sans-serif;

                }
                ul{
                    list-style: none;
                    margin: 0;
                    padding:0;
                }
                a {
                    text-decoration:none;
                }
            `}
            />
            <Head>
                {/* toda la información meta que va antes del body, se mete en head */}
                <html lang="en"/>
                <title>
                    Buy&Sell nextjs
                </title>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Nunito:wght@300;400;700&family=Roboto:ital,wght@0,300;0,400;1,500;1,700&display=swap" rel="stylesheet"/>
                <link href="static/css/app.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <Header/>
        <main>
            {props.children}
        </main>
        </Fragment>
    )
}
