function createList(){
    const elements = ["All", "Java", "C++", "C", "C#", "JS", "Vala", "Python", "Go", "R", "Swift", "PHP", "Scala", "Kotlin"]
    elements.sort()
    const select = document.getElementById("lang")

    elements.forEach(e=>{
        const option = document.createElement("option")
        option.text = e
        option.value = getLang(e);
        select.add(option)
    });
}
function getLang(e){
    switch(e){
        case "All": return "" 
        case "Java": return " language:java"
        case "C++": return " language:cpp"
        case "C": return " language:c"
        case "JS": return " language:javascript"
        case "C#": return " language:csharp"
        case "Vala": return " language:vala"
        case "Python": return " language:python"
        case "Go": return " language:go"
        case "R": return " language:r"
        case "Swift": return " language:swift"
        case "PHP": return " language:php"
        case "Scala": return " language:scala"
        case "Kotlin": return " language:kotlin"
    }

}
async function getRepos(){
    try{
        const select = document.getElementById("lang")
        const lang = select.value
        const ranking = document.getElementById("ranking")
        ranking.innerHTML = "";
        document.getElementById("loading").appendChild(loading());
        const url = "https://api.github.com/search/repositories?q=stars:>1"+lang+"&per_page=10"
        const response = await fetch(url)
        const result = await response.json()
        document.getElementById("loading").innerHTML=""
        result.items.forEach(e=>{
            const rep = document.createElement("div")
            rep.classList.add("rep")
            rep.appendChild(createA("title", e.name, e.html_url))
            rep.appendChild(createElement("stars", parseInt( e.stargazers_count).toLocaleString('en-US', {maximumFractionDigits:2})))
            rep.appendChild(createAuthor(e.owner))
            rep.appendChild(createElement("date", e.created_at.substring(0,10)))
            rep.appendChild(createElement("des", " "+e.description))
            ranking.appendChild(rep)
        })
        console.log(result)
    }catch(err){
        console.error(err)
    }
    
}
function loading(){
    const p = document.createElement("i")
    p.classList.add("icon-spin")
    p.classList.add("animate-spin")
    p.classList.add("loading")
    return p
}
function createA(clazz, text, link){
    const a = document.createElement("a")
    a.classList.add(clazz)
    a.textContent=text
    a.href=link
    a.target="_blank"
    return a
}
function createAuthor(owner){
    const author = document.createElement("div")
    author.classList.add("author")
    const img = document.createElement("img")
    img.src = owner.avatar_url
    img.style.width = "25px"
    img.style.height = "25px"
    author.appendChild(img)
    author.appendChild(createElement("author-name", " "+owner.login))
    return author

}
function createElement(clazz, text){
    const p = document.createElement("p")
    p.classList.add(clazz)
    p.innerText=text;
    return p
}
