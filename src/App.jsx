//import { useState } from 'react'
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./styles/layout/Main.scss"

const posts = [
{
id: 1, 
author: {
  avatarUrl: 'http://fithug.com/SuelenGalhardo.png',
  name: 'Suelen Ranucci',
  career: 'web developer',
  role: 'web developer',
},

content: [ { type: 'paragraph', content: 'Fala galera 👋' },
  { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
  { type: 'link', content: 'jane.design/doctorcare' },
],
publishedAt: new Date('2022-05-03 20:00:00'),
},
{
id: 2,
author: {
  avatarUrl: 'https://github.com/maykbrito.png',
  name: 'Mayk Brito',
  role: 'Educator @Rocketseat'
},
content: [
  { type: 'paragraph', content: 'Fala galera 👋' },
  { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
  { type: 'link', content: 'jane.design/doctorcare' },
],
publishedAt: new Date('2022-05-10 20:00:00'),
},

]


export function App() {
 

  return (
    <>
    <div>
     <Header />

     <div className="wrapper">
      
     <Sidebar />  

      <main>
      <Post
        author="Suelen Galhardo"
        content= "lorem ipsum dolor sit amet, consectetur adip"
        
        />
          <Post
        author="Otto Ranucci "
        content= "lorem ipsum dolor sit amet, consectetur adip"
        
        />
            <Post
        author="Otto Ranucci "
        content= "lorem ipsum dolor sit amet, consectetur adip"
        
        />
      </main>

     </div>
     </div>

    </>
  )
}

