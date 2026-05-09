export default function Profile(props) {
  return (
    <div>
      <h3>{props.user.name}</h3>
      <h3>{props.user.age}</h3>
      <h3>{props.user.country}</h3>
    </div>
  );
}
