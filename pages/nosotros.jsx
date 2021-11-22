import Head from 'next/head'
import Image from 'next/image'
import Prueba from './../components/prueba'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'
import Layout from '../components/layout/Layout'

const Heading = styled.h1`
color:blue;
`;

export default function Nosotros() {
  return (
    <div>
      <Layout>
        <Heading>Nosotros</Heading>
       </Layout>

    </div>
    
  )
}
