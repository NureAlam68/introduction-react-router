import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {username, website, id, name} = user;
    return (
        <div>
            <h1>Details about: {name}</h1>
            <p>Id: {id}</p>
            <p>Website: {website}</p>
            <p>User Name: {username}</p>
        </div>
    );
};

export default UserDetails;