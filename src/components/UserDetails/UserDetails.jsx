import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {username, website, id, name} = user;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Details about: {name}</h1>
            <p>Id: {id}</p>
            <p>Website: {website}</p>
            <p>User Name: {username}</p>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default UserDetails;