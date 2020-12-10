import Ranking  from './Ranking'
import Repo from '././Repo';
import React, { useEffect, useState } from 'react'
import './content.css'
import langs from '../../data'


const Content =  ()=>{
    const [val, setVal] = useState("")
    const [rankingState, setRankingState] = useState({
        loading: false,
        repos: null
    })

    const gitHubApi = async ()=>{
        setRankingState({loading: true})
        const apiUrl ="https://api.github.com/search/repositories?q=stars:>1 "+val+"&per_page=10"
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setRankingState({repos: data.items.map(item=>{
            return{ 
                "name": item.name, 
                "author": item.owner.login, 
                "authorImg": item.owner.avatar_url,
                "description": item.description,
                "html": item.html_url,
                "stars": parseInt( item.stargazers_count).toLocaleString('en-US', {maximumFractionDigits:2}),
                "date": item.created_at.substring(0,10)
            }
          }), loading: false}))
      }
      useEffect(gitHubApi,[])
      useEffect(gitHubApi,[val])
    return(
        <div className="content">  
            <h1>Top 10 starred repositories on <a className="GitHub-link" href="https://github.com/" target="_blank">GitHub<i className="icon-github"></i></a></h1>
            <div className="filter-menu">
                <p>Select language:</p>
                <select name="lang" id="lang" onChange={(e)=>{setVal(e.target.value);}}>
                    {
                        langs.map(lang=>
                            <option value={lang.val}>{lang.name}</option>
                        )
                    }
                </select>
            </div>
            <Ranking repos={rankingState.repos} state={rankingState.loading}/>
          
        </div>
    );
}

export default Content