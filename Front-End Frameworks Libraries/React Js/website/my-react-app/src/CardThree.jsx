import CardPic from './assets/2024-07-21-01-24-32.png';

function CardThree() {
  const styles = {
    card: {
      border: '1px solid hsla(0, 0%, 80%)',
      borderRadius: '10px',
      boxShadow: '5px 5px 5px hsla(0, 0%, 0%, 0.1)',
      padding: '20px',
      margin: '10px',
      textAlign: 'center',
      maxWidth: '250px',
      display: 'inline-block',
    },
    cardImage: {
      maxWidth: '60%',
      height: 'auto',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    cardTitle: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      margin: '0',
      color: 'hsl(0, 0%, 20%)',
    },
    cardText: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: 'hsl(0, 0%, 30%)',
    },
  };

  return (
    <div style={styles.card}>
      <img style={styles.cardImage} src={CardPic} alt="Card Picture" />
      <h2 style={styles.cardTitle}>Lizzy</h2>
      <p style={styles.cardText}>Third cute adorable cat</p>
    </div>
  );
}

export default CardThree;
