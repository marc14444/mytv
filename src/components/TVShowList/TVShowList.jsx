import { TVShowListItem } from "../TVShowListeItem/TVShowListItem"
import s from "./style.module.css"
export function TVShowList({tvShowList, onClickItem}){
    return <>
        <div className={s.title}>You make also like:</div>
        <div className={s.list}>
            {tvShowList.map((tvShow)=>{
                return (
                    <span key={tvShow.id} className={s.tv_show_list_item}>
                        <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
                    </span>
                );
            })}
        </div>
    </>
}