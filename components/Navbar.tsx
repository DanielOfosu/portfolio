import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <a href="#" style={styles.link}>Home</a>
            <a href="#" style={styles.link}>Resume</a>
            <a href="#" style={styles.link}>Blog</a>
            <a href="#" style={styles.link}>Books</a>
            <a href="#" style={styles.link}>Tenets</a>
        </nav>
    );
};

import { CSSProperties } from 'react';

type Position = 'fixed' | 'absolute' | 'relative'; // Define the Position type

const styles = {
        navbar: {
                display: 'flex',
                justifyContent: 'space-around',
                position: 'fixed' as Position, // Update the type of position
                top: 0,
                width: '100%',
                height: '60px',
                backdropFilter: 'saturate(180%) blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                fontFamily: 'SF Pro Light', // Update font family
                color: 'white', // Set text color to white
        },
        link: {
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'white', // Set link color to white
                fontWeight: 'bold',
        },
};

export default Navbar;