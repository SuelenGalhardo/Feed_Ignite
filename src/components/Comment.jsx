import React from 'react';
import { useState } from "react";
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';


export function Comment({content,   onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className='comment'>
      <Avatar hasBorder={false} src="https://github.com/SuelenGalhardo.png" alt="" />

      <div className="comment__commentBox">
        <div className="comment__Content">
            
          <header className='comment__header'>
            <div className= "comment__header--authorAndTime">
              <strong>Suelen Ranucci</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">hace 1h</time>
            </div>

            <button  onClick={handleDeleteComment} className='comment__header--buttonDelete' title="Deletar comentário">
              <Trash size={20} />
              
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className='comment__footer'>
          <button onClick={handleLikeComment} className='comment__btnApplaud'>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}