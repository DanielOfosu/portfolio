import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <a href="#journey" style={styles.link}>Experience</a>
            <a href="#tenets" style={styles.link}>Tenets</a>
            <a href="#blog" style={styles.link}>Blog</a>
            <a href="https://github.com/DanielOfosu/portfolio" style={styles.link}>Github</a>
        </nav>
    );
};

import { CSSProperties } from 'react';

type Position = 'fixed' | 'absolute' | 'relative'; // Define the Position type

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',  // Change to center
        position: 'fixed' as Position,
        top: 0,
        width: '100%',
        height: '60px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        backdropFilter: 'blur(10px)', // Add backdrop filter with blur
        zIndex: 1000,
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'regular',
        margin: '0 40px',  // Further reduced margin
        fontSize: '16px',
    },
    glass: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)', // Add backdrop filter with blur
    },
};
export default Navbar;
