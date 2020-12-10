import React, { useState } from 'react'
import Repo from '././Repo'
import './ranking.css'



const Ranking = ({repos, state})=>{
    return(
        <section className="ranking"> 
            {
                 !state?repos==null?
                    <div  className="loading">There are no repositories</div>:
                    <RankingList rep ={repos}/>
                 :<div className="loading"><i className="icon-spin animate-spin"></i></div>
            }
        </section>
    );
}
const RankingList = ({rep})=>{
    return(
        <div> 
            {
                rep.map(r=><Repo data={r}/>)
            }
        </div>
    );
}
export default Ranking