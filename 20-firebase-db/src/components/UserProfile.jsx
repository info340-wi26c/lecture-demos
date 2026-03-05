import { useParams } from "react-router";

function UserProfile(props) {
  const { user = {} } = props;
  const urlParams = useParams();

  const {
    name = user.name || urlParams.userId || "Anonymous",
    image = "img/anon.jpg",
    email = "example@example.com",
    location = "Anywhere, Earth",
    bio = "Anon has no name, no face, no place.",
  } = user;

  return (
    <>
    <h2>User Profile</h2>
    <div className="userContainer">
      <img src={image} alt={`${name} avatar`} className="avatar" />
      <div className="info">
        <p className="name">{name}</p>
        {email && <div className="meta">{email}</div>}
        {location && <div className="meta">{location}</div>}
        {bio && <p className="bio">{bio}</p>}
      </div>
    </div>
    </>
  );
};

export default UserProfile;