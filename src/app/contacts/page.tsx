import React from 'react'
import NavBar from '@/Components/NavBar/NavBar'
import Footer from '@/Components/Footer/Footer'
import Contacts from '@/Components/Contacts/Contacts'

function page() {
  return (
    <div className='contacts'>
      <NavBar options={[
        {path:"/contacts", label: "Contacts"},
        {path: "/", label:"Home"},
        {path: "/projects", label:"Projects"},
      ]}/>
      <Contacts/>
      <Footer options={[
        {path:"/contacts", label: "Contacts"},
        {path: "/", label:"Home"},
        {path: "/projects", label:"Projects"},
        ]}/>
    </div>
  )
}

export default page