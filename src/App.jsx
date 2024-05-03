import { useEffect, useState } from 'react'
import { TVShowAPI } from './api/tv-show'
import './globale.css'
import s from './style.module.css'
import { BACKDROP_BASE_URL } from './config'
import { TVShowDetail } from './components/TVShowDetail/TVShowDetail'
import { Logo } from './components/Logo/Logo'
import logo from "./assets/images/regarder-la-television.png"
import { TVShowListItem } from './components/TVShowListeItem/TVShowListItem'
import { TVShowList } from './components/TVShowList/TVShowList'
import { SearchBar } from './components/SearchBar/SearchBar'

//TVShowAPI.fetchPopulars()
//TVShowAPI.fetchRecommendation(1402)
export function App(){
    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([])
    async function fetchPopulars(){
        const populars = await TVShowAPI.fetchPopulars();
        if(populars.length > 0){
            setCurrentTVShow(populars[0]);
        }

    }

    async function fetchRecommentaions(tvShowId){
        const recommandations = await TVShowAPI.fetchRecommendation(tvShowId);
        if(recommandations.length > 0){
            setRecommendationList(recommandations.slice(0,10));
        }

    }

    useEffect(()=>{
        fetchPopulars();
    }, []);

    useEffect(()=>{
        if(currentTVShow){
            fetchRecommentaions(currentTVShow.id);
        }
    }, [currentTVShow]);

    console.log("ma serie la plus populaire est:",currentTVShow);

    function setCurrentTvShowFromRecommendation(tvShow){
        alert(JSON.stringify(tvShow))
    }

    console.log('nos recommendation', recommendationList);

    async function searchTVShow(tvShowName){
        const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
        if(searchResponse.length > 0){
        setCurrentTVShow(searchResponse[0])
        }
    }
    return (
        
            <div className={s.main_container}
                style={{ background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`:"black"}}
            
            >
                <div className={s.header}>
                    <div className='row'>
                        <div className='col-4'>
                            <Logo 
                                image={logo}
                                title= "MyTV" 
                                subtiles="Find a show you may like" />
                        </div>
                        <div className='col-md-12 col-lg-4'>
                            <SearchBar onSubmit={searchTVShow}/>
                        </div>
                    </div>
                </div>
                <div className={s.tv_show_detail}>
                    {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
                </div>
                <div className={s.recommandation}>
                    {recommendationList && recommendationList.length > 0 && (
                        <TVShowList 
                            onClickItem={setCurrentTVShow}
                            tvShowList={recommendationList} />
                )}
                    </div>
            </div>
        
    )
}