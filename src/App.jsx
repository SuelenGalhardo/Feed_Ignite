//import { useState } from 'react'
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./styles/layout/Main.scss"

const posts = [
{
id: 1, 
author: {
  avatarUrl: 'http://github.com/Diego.png',
  name: 'Fernando',
  career: 'web developer',
  role: 'web developer',
},

content: [ { type: 'paragraph', content: 'Hola  gente  👋' },
  { type: 'paragraph', content: ' Acabo de subir un poyecto en mi portafolio. Es uno que hizo en el 🚀' },
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
  { type: 'paragraph', content: 'Hola gente 👋' },
  { type: 'paragraph', content: ' Acabo de subir un poyecto en mi portafolio. Es uno que hizo en el 🚀' },
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
      {posts.map(post =>{

        return (
        
        <Post 
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
        
        />
      )


    })}
      </main>

     </div>
     </div>

    </>
  )
}

