import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {userId, title, body, id} = postDetails;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2>Post details about: {id}</h2>
            <p>User Id: {userId}</p>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;