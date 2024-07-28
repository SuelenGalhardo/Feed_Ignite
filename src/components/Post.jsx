


  export function Post() {
    return (
      <>

      <article className="post">
        <header>
        <div className="post__author">
          <img className="post__avatar" src="https://github.com/diego3g.png" />

          <div className="post__authorInfo">
            <strong className="post__authorInfo--name">Diego Fernandes</strong>
            <span className="post__authorInfo--career">web developer</span>

          </div>
          
        </div>

      <time className="post__time" dateTime=" 2022-07-11  08:13:30 ">Publicado hace una 1h</time>


        </header>

        <div className="post__content">
          <p className="post__content--text">Hola Chic@s 👋 </p>
          <p  className="post__content--text">Acabo de subir un poyecto en mi portafolio. Es uno que hizo en el NLWJorney, con NODE.js </p>

          <p><a className="post__content--link" href=""> 👉 jane.design/doctorcare</a></p>

          <p><a className="post__content--link" href="">#nuevoproyecto</a>{' '}
          <a className="post__content--link"  href="">#nlw</a>{' '}
          <a className="post__content--link"  href="">#rocketseat</a>
          </p>
        </div>
        <form className="post__form">
        <strong className="port__form--feedback">Deja tu feedback</strong>

        <textarea className="post__form--commit" 
          placeholder="Deja tu comentario"
        />

        <footer className="footerBtn">
          <button className="footer__button" type="submit">Publicar</button>
        </footer>
      </form>

      </article>
       
      </>
    )
  }