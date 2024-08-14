import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <>
            <div className='relative bg-transparent'>
                <nav className="flex justify-center items-center py-6 bg-transparent">
                    <ul className="flex space-x-4 bg-transparent">
                        <li>
                            <a href="#" className="text-white hover:text-gray-600">PROYECTOS</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-600">SOBRE MI</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-600">CONTACTO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
