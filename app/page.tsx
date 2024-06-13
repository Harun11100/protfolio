import Approach from "@/Components/Approach";
import Clients from "@/Components/Clients";
import Experience from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/floatingNavbar";
import { navItems } from "@/data";



export default function Home() {
  return (<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip
   mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <Clients/>
      <Experience/>
      <Approach/>
      <Footer/>

    </div>

  </main> 
   
  )
}
