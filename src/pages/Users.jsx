const users = [
  { id: 1, name: 'Example 1', email: 'abc@example.com' },
  { id: 2, name: 'Example 2', email: '123@example.com' },
];

function Users({ onUserClick }) {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <button onClick={() => onUserClick(user)}>{user.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
