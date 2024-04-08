import WorkWidget from '@/Components/WorkWidget/WorkWidget'
import Header from '@/Components/Hero/Header'
import NavBar from '@/Components/NavBar/NavBar'
import Skills from '@/Components/Skills/Skills'

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
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <WorkWidget/>
      </main> */}
    </div>
  )
}
