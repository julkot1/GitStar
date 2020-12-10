

  /*
    const url = "https://api.github.com/search/repositories?q=stars:>1"+lang+"&per_page=10"
    const response =  await fetch(url)
    const result = await response.json()
    result.items.forEach(item=>{
        return{ 
            "name": item.name, 
            "author": item.owner.login, 
            "author-img": item.owner.avatar_url,
            "description": item.description,
            "date": item.created_at.substring(0,10)
        }
        
    })
    

}
*/ 

const langs=[
    {
        "name": "All",
        "val": ""
    },
    {
        "name": "Java",
        "val": "language:java"
    },   
    {
        "name": "C++",
        "val": "language:cpp"
    },
    {
        "name": "C",
        "val": "language:c"
    },
    {
        "name": "C#",
        "val": "language:csharp"
    },  
    {
        "name": "JS",
        "val": "language:javascript"
    },
    {
        "name": "Vala",
        "val": "language:vala"
    },
    {
        "name": "PHP",
        "val": "language:php"
    }, 
    {
        "name": "Scala",
        "val": "language:scala"
    },  
    {
        "name": "R",
        "val": "language:r"
    },  
    {
        "name": "Kotlin",
        "val": "language:kotlin"
    },   
    {
        "name": "GO",
        "val": "language:go"
    },  
    {
        "name": "Swift",
        "val": "language:swift"
    } 
]
export default langs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

