export function Avatar ({ hasBorder= true, src }) {

   // const hasBorder = props.hasBorder != false;
   //desistruracion javascript


return (
<img className={hasBorder ? 'imgAvatarWithBorder' : 'imgAvatar' } 
src={src} 
alt="imagen de Perfil" 
/>

)
}