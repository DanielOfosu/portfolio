import React from 'react';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div style={styles.card}>
      <div style={styles.iconContainer}>
        <img src={iconSrc} alt="Icon" style={styles.icon} />
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: 20,
    width: 300,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'flex-start',
  },
  iconContainer: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 30, // Adjust this as needed
    height: 30, // Adjust this as needed
  },
  title: {
    margin: 0,
    marginBottom: 10,
    fontSize: 18,
    color: 'white', // Change text color to white
  },
  description: {
    margin: 0,
    color: 'grey', // Change text color to white
  },
};

export default FeatureCard;
