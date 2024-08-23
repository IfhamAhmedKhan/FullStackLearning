import styles from './Card.module.css';
import CardPic from '../assets/2024-07-21-01-24-32.png';

function CardTwo() {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={CardPic} alt="Card Picture" />
            <h2 className={styles.cardTitle}>Kaki</h2>
            <p className={styles.cardText}>Second cute adorable cat</p>
        </div>
    );
}

export default CardTwo;
