import React from 'react'
import { TextAnimate } from '../Texts/Textanimated'
import { Skills } from '../skills/Skills'

export const Inicio = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div >
                    <TextAnimate text="Hola! Soy Leandro Jaime, desarrollador Front-End" type="fadeIn" />
                </div>
            </div>

            <Skills />
        </>
    )
}
