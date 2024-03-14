

export default function CardsScores({
        title = "Total Followers",
        score = "4000",
        nameLink = "viewdetails",
        href = "_Blank"
        }){
        
        return( 
            <div className="card">
                <h2>{title}</h2>
                <p>{score} </p>
                <div><a className='viewdetails' href={href}>{nameLink}</a></div>
            </div>
       )
}

