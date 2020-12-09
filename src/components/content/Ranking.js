import React, { useState } from 'react'
import './ranking.css'
import langs from '../../data'


const Ranking = ()=>{
    const [loaded, setLoaded] = useState(true)
    return(
        <div className="ranking"> 
            {
                loaded?<RankingList/>:<i className="icon-spin animate-spin loading"></i>
            }
        </div>
    );
}
const RankingList = ()=>{
    return(
        <div> 
            jhjhjhgjhj
        </div>
    );
}

export default Ranking