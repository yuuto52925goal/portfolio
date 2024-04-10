import React from 'react'
import "./NavBar.css"

interface NavBarProps{
    options: Option[];
}

interface Option{
    path:string;
    label:string;
}

const NavBar:React.FC<NavBarProps> = ({options}) =>{
  return (
    <div className="navbar-element"> 
        <p className='portofolio-p'>Portfolio</p>
        <nav className="navbar">
            <ul className='navbar-ul'>
            {options.map((option, key)=>(
                <li key={key} className='nav-list'>
                    <a className={`nav-link ${option.label}`} href={option.path}>{option.label}</a>
                </li>
            ))}
                <li key="5">
                <a className='nav-link' href="Resume.pdf" target="_blank" rel="noopener noreferrer">Open Resume</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar;
