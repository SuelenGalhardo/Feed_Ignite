import React from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';


export function Comment(props) {
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

            <button className='comment__header--buttonDelete' title="Deletar comentário">
              <Trash size={20} />
              
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer className='comment__footer'>
          <button className='comment__btnApplaud'>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}