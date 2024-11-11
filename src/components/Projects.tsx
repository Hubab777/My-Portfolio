import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
  {
  id: 0,
  title: "Web Calculator",
  desc: "A simple Web Calculator used to perform basic arithmetic operations",
  img: "/web-calculator.png",
  tags: ["HTML", "CSS", "Typescript", "Node"],
  },
  {
    id: 1,
    title: "GIAIC Card Clone",
    desc: "A clone of Id card of Governor Initiative for Artificial Intelligence, WEB 3.0 & Metaverse",
    img: "/card-project.png",
    tags: ["HTML","Tailwind CSS", "Next.js", "Node"],
    },
    {
      id: 2,
      title: "Static Resume",
      desc: "A static resume that contains personal information, education, experience and skills",
      img: "/resume.png",
      tags: ["HTML","CSS", "TypeScript", "Node"],
      },   
]

const Projects = () => {
  return (
    <div id='projects'
    className='container pt-32'>
      <Heading title='My Projects'/>
      
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
       {data.map((el) => (<Card 
       key={el.id}
       title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
       
       />))}
       
       </div>
    </div>
  )
}

export default Projects
