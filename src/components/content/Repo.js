const Repo = ({data})=>{
    return(
        <article className="rep">
            <a className="title" href={data.html} target="_blank">{data.name}</a>
            <p className="stars">{data.stars}</p>
            <div className="author">
                <img src={data.authorImg} width="25px" height="25px"></img>
                <p className="author-name">{data.author}</p>
            </div>
        <p className="date">{data.date}</p>
        <p className="des">{data.description}</p>
        </article>
    );
}
export default Repo;