import CardPic from './assets/2024-07-21-01-24-32.png'

function Card(){
    return(
        <div className="card">
        <img className="card-image" src={CardPic} alt="Card Picture" ></img>
        <h2 className="card-title">Kako</h2>
        <p className="card-text">First cute adorable cat</p>
        </div>
    );
}

export default Card