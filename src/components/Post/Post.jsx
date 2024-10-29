import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    const postStyle = {
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h2>Id: {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handleShowDetails}>Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;