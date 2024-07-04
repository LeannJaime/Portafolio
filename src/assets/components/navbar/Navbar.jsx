import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav>
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center py-4">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-600">PROYECTOS</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-600">SOBRE MI</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-600">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
