import React from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';


export function Comment() {
  return (
    <div className='comment'>
      <img src="https://github.com/SuelenGalhardo.png" alt="" />

      <div className="comment__commentBox">
        <div className="comment__Content">
            
          <header>
            <div className= "comment__authorAndTime">
              <strong>Suelen Ranucci</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}