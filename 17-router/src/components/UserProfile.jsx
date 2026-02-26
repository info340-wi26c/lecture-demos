import { useParams } from "react-router";
import '../styles/users.css';

function UserProfile({ user = {} }) {
  const urlParams = useParams();
  console.log(urlParams);

  const {
    name = urlParams.userId || "Anonymous",
    avatar = "https://via.placeholder.com/96",
    email,
    location,
    bio,
  } = user;

  const { userId } = useParams();

  return (
    <>
    <h1>{userId}</h1>
    <div className="container">
      <img src={avatar} alt={`${name} avatar`} className="avatar" />
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        {email && <div style={styles.meta}>{email}</div>}
        {location && <div style={styles.meta}>{location}</div>}
        {bio && <p style={styles.bio}>{bio}</p>}
      </div>
    </div>
    </>
  );
};

export default UserProfile;