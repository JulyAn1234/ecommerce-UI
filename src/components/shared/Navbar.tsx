import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../helpers/AuthHelper';

const Navbar = () => {
    const navigate = useNavigate();

    const onSignOut = () => {
        removeToken();
        navigate('/login');
    }
    
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>Ecommerce App</div>
            <div style={styles.navItems}>
                <button onClick={onSignOut} style={styles.signOutButton}>
                    Sign Out
                </button>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        background: '#333',
        color: '#fff',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    navItems: {
        display: 'flex',
        gap: '15px',
    },
    signOutButton: {
        background: 'red',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
    },
};

export default Navbar;
