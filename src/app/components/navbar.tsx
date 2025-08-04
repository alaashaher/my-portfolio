import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow-md ">
            <div className="container m-auto grid justify-center items-center text-center w-fit p-3 
                rounded-full border-rounded border border-green-500 px-10">
                <ul className="flex space-x-6 text-gray-600">
                    <li>
                        <a href="#" className="hover:border-green-500">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-green-500">
                            Articles
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-green-500">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-green-500">
                            Speaking
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:border-green-500">
                            Uses
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
