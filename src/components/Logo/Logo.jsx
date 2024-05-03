import s from "./style.module.css"
export function Logo({image,title,subtiles}){
    return (<>
        <div className={s.container}>
            <img src={image} className={s.img}/>
            <span className={s.title}>{title}</span>
        </div>
        <span className={s.subtile}>{subtiles}</span> 
</>)
}