export default function StudentList(props) {
  return (
    <ul>
      {props.students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
