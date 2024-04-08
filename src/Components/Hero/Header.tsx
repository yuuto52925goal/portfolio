import React from 'react'
import me from "./Images/IMG_2646.jpg"
import Image from 'next/image'
import "./Header.css"

export default function Header() {
  return (
    <div className='profile'>
      <div className='discription-profile'>
        <h2>Building Digital Experiences That Inspire</h2>
        <p>Passionate Backend Developer and Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
      </div>
      <div className='image-container'>
        <Image src={me} alt="" className='image-me'/>
      </div>
    </div>
  )
}
