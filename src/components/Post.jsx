import React, { useState } from 'react';
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';





// estado = son variables que quiero que el componente monitore 

export function Post({author, publishedAt, content}) {

  const [comments, setComments] = useState ([
    'Post muy chulo, alaa!'
  
  ])

  const [newCommentText, setNewCommentText] = useState('');



  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'a las' HH:mm'h'", {
    locale: es,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: es,
    addSuffix: true
  });

  function handleNewComment(event) {
    event.preventDefault();



    setComments([...comments, newCommentText]);
    setNewCommentText('');

  
   
  }
  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }

 

  return (
    <>
      <article className="post">
        <header>
          <div className="post__author">
            <Avatar  src={author.avatarUrl  } />

            <div className="post__authorInfo">
              <strong className="post__authorInfo--name">
                {author.name}
              </strong>
              <span className="post__authorInfo--career">{author.role}</span>
            </div>
          </div>

          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
        </header>

        <div className="post__content">
         {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
 
         })}
        </div>
        <form onSubmit={handleNewComment} className="post__form">
          <strong className="port__form--feedback">Deja tu feedback</strong>

          <textarea
          name='comment'

            className="post__form--commit"
            placeholder="Deja tu comentario"
            value={newCommentText}
            onChange={handleNewCommentChange}
          />

          <footer className="footerBtn">
            <button className="footerBtn__button" type="submit">
              Publicar
            </button>
          </footer>
        </form>
        <div className="commentList">
        {comments.map(comment => {
          return <Comment  content={comment} />
        })}

        </div>
      </article>
    </>
  );
}


// Programacion imperactiva 

//que se debe hacer paso a paso- 

//Programacion declarativa 

//en react evita utilizar la imperactiva  y utiliza la programacion declarativa  
