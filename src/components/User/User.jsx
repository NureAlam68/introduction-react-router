import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, email, phone, id} = user;
    const userStyle = {
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Details</Link>
            <Link to={`/user/${id}`}><button>User Details</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;