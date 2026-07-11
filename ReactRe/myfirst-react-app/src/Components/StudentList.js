export default function StudentList(props) {
  return (
    <ul>
      {props.student.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
