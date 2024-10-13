import React,{useState,useEffect} from 'react'
import Header from '../../component/hero/Header'
import About from '../../component/about/About'
import Project from '../../component/project/Project'
function Home() {
  const heroData=[
    {text1:"web developer"},
    {text1:"freelancer"},
    {text1:"web designer"}
  ]
  const [hero,setHero]=useState(1)

  useEffect(()=>{
    setInterval(() => {
      setHero((count)=>{return count===2?0:count+1})
    }, 5000);
  },[])
  return (
    <div >
      <Header heroData={heroData[hero]} setHero={setHero} 
       hero={hero} />
      <About/>
      <Project/>
    </div>
  )
}

export default Home
