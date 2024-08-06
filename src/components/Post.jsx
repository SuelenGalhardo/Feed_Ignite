import React from 'react';
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export function Post({author, publishedAt, content}) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'a las' HH:mm'h'", {
    locale: es,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: es,
    addSuffix: true
  });

 

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
        <form className="post__form">
          <strong className="port__form--feedback">Deja tu feedback</strong>

          <textarea
            className="post__form--commit"
            placeholder="Deja tu comentario"
          />

          <footer className="footerBtn">
            <button className="footerBtn__button" type="submit">
              Publicar
            </button>
          </footer>
        </form>
        <div className="commentList">
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  );
}
