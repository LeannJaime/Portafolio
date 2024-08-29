import React from 'react'
import TextAnimate from '../Texts/Textanimated'
import { Card } from '../Card/Card'

export const Proyectos = () => {
    return (
        <>
            <div className="flex justify-center">
                <TextAnimate text="PROYECTOS" type="fadeIn" />
            </div>
            <Card />
        </>
    )
}
