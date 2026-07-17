// ORIGINAL
// function Avatar({src, alt}){
//   return <img src={src} alt={src} />
// }

// export default Avatar;

// REFACTORED
export default function Avatar({src, alt}){
  return <img src={src} alt={alt} />
}