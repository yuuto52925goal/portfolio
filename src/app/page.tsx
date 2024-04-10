import WorkWidget from '@/Components/WorkWidget/WorkWidget'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '@/Components/Hero/Header'
import NavBar from '@/Components/NavBar/NavBar'
import Skills from '@/Components/Skills/Skills'
import WorkExperience from '@/Components/WorkExperience/WorkExperience'
import Footer from '@/Components/Footer/Footer';

export default function Home() {

  return (
    <div className='home'>
      <NavBar options={[
        {path:"/contacts", label: "Contacts"},
        {path: "/", label:"Home"},
        {path: "/projects", label:"Projects"},
      ]}/>
      <Header />
      <Skills />
      <WorkExperience/>
      <Footer options={[
        {path:"/contacts", label: "Contacts"},
        {path: "/", label:"Home"},
        {path: "/projects", label:"Projects"},]}/>
    </div>
  )
}
