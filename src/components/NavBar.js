import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        303dog
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="text-blue-100 bg-blue-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800">
                        About
                    </NavLink>
                    <NavLink 
                        to="/projects"
                        activeClassName="text-blue-100 bg-blue-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/post"
                        activeClassName="text-blue-100 bg-blue-600"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800">
                        Blog
                    </NavLink>
                </nav>
                <div className="inline-flex py- px-3 my-6">
                    <SocialIcon 
                    url="https://github.com/303dog" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:35, width: 35 }}
                    />
                    <SocialIcon 
                    url="https://linkedin.com/in/paul-beckwith-20940840" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:35, width: 35 }}
                    />
                    <SocialIcon 
                    url="https://paulbeckwith-303.medium.com/" 
                    className="mr-4" 
                    target="_blank" 
                    fgColor="#fff" 
                    style={{ height:35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    )
}
