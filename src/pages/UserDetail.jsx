function UserDetail({ user, goBack }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default UserDetail;
