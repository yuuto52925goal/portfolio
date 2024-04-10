import Footer from '@/Components/Footer/Footer'
import NavBar from '@/Components/NavBar/NavBar'
import React from 'react'
import Projects from '@/Components/Projects/Projects'


function page() {
  return (
    <div className='projects'>
      <NavBar options={[
        {path:"/contacts", label: "Contacts"},
        {path: "/", label:"Home"},
        {path: "/projects", label:"Projects"},
      ]}/>
      <Projects />
      <Footer options={[
        {path:"/contacts", label: "Contacts"},
        {path: "/", label:"Home"},
        {path: "/projects", label:"Projects"},
        ]}/>
    </div>
  )
}

export default page