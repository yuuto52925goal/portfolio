import WorkWidget from '@/Components/WorkWidget/WorkWidget'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '@/Components/Hero/Header'
import NavBar from '@/Components/NavBar/NavBar'
import Skills from '@/Components/Skills/Skills'
import WorkExperience from '@/Components/WorkExperience/WorkExperience'


export default function Home() {
  return (
    <div className='home'>
      <NavBar options={[
        {path: "/", label:"Home"},
        {path:"/resume", label: "Resume"},
        {path: "/projects", label:"Projects"},
        {path:"/contacts", label: "Contacts"}
      ]}/>
      <Header />
      <Skills />
      <WorkExperience/>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <WorkWidget/>
      </main> */}
    </div>
  )
}
