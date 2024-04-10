import React from 'react'
import NavBar from '@/Components/NavBar/NavBar'
import Footer from '@/Components/Footer/Footer'
import Resume from '@/Components/Resume/Resume'

function page() {
  return (
    <div className='resume'>
      <NavBar options={[
        {path: "/", label:"Home"},
        {path:"/resume", label: "Resume"},
        {path: "/projects", label:"Projects"},
        {path:"/contacts", label: "Contacts"}
      ]}/>
       <Resume />
      <Footer options={[
        {path: "/", label:"Home"},
        {path:"/resume", label: "Resume"},
        {path: "/projects", label:"Projects"},
        {path:"/contacts", label: "Contacts"}]}/>
    </div>
  )
}

export default page