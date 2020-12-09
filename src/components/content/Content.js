import React from 'react'
import './content.css'
import langs from '../../data'
import './Ranking'
import Ranking from './Ranking'


const Content = ()=>{
    return(
        <div className="content"> 
            <h1>Top 10 starred repositories on <a class="GitHub-link" href="https://github.com/" target="_blank">GitHub<i class="icon-github"></i></a></h1>
            <div class="filter-menu">
                <p>Select language:</p>
                <select name="lang" id="lang" onchange="getRepos()">
                    {
                        langs.map(lang=>
                            <option value={lang.val}>{lang.name}</option>
                        )
                    }
                </select>
            </div>
            <Ranking/>
        </div>
    );
}
export default Content