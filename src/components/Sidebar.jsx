
import imgCover from '../assets/path_to_image.png';
//import iconGreen from '../assets/iconWritingsGreen.svg';

import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';


export function  Sidebar( ){

    return (
        <aside className="sidebar">

            <img className='sidebar__imgCover' src={imgCover} alt="" />
           
            <div className='sidebar__profile'>
                <Avatar  src="https://github.com/SuelenGalhardo.png"/>

           
                <strong className='sidebar__name'>Suelen Galhardo</strong>
                <span className='sidebar__career'>Web Developer</span>
            </div>

            <footer className='sidebar__footer'>
         
                    <a className='sidebar__footer--edit' href="#">
                      <PencilLine size={20} />
                        Editar su perfil
                    </a>
            </footer>

        </aside>
    )



}
