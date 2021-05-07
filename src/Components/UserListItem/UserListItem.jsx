export default function UserListItem({ users, activeUser, setActiveUser }) {
  return (
    <ul className="UserListItem">
      <h1>{users.name}</h1>
    </ul>
  );
}
