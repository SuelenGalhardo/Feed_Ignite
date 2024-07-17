//import { useState } from 'react'
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./styles/layout/Main.scss"



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

