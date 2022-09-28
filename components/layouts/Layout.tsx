import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar';

interface Props {
    children: React.ReactNode
    title?:string;
}

export const Layout: FC<Props> = ({children, title}) => {

    const origin = (typeof window === 'undefined') ? '' : window.location.origin;

    
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Raúl Jiménez'/>
            <meta name='description' content={`Información sobre el pokémon ${ title }`}/>
            <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>

            <meta property="og:title" content={`Información sobre el pokémon ${ title }`} />
            <meta property="og:description" content={`Página sobre ${ title }`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        <Navbar />
        <main style={{
            padding: '0 20px'
        }}>
            {children}
        </main>
    </>
  )
}
