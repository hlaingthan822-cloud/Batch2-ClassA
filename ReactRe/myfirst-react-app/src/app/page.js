"use client";
import Header from "../Components/Header";
import Welcome from "../Components/Welcome";
import Counter from "../Components/Counter";
import InputExample from "@/Components/InputExample";
import Message from "../Components/Message";
import ToggleMessage from "@/Components/ToggleMessage";
import Greeting from "@/Components/Greeting";
import Button from "@/Components/Button";
import Alert from "@/Components/Alert";
import Card from "@/Components/Card";
import Profile from "@/Components/Profile";
import StudentList from "@/Components/StudentList";
import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { AuthContext } from "@/Context/AuthContext";
export default function Home() {
  function handleClick() {
    alert("Hello Javascript");
  }
  const user = { name: "Ma Ma", age: 22, country: "Signpore" };
  const student = ["Alice", "Ma Ma"];
  return (
    <div>
      <NavBar />
      <Header />
      <Welcome />
      <Counter />
      <InputExample />
      <Message />
      <ToggleMessage />
      <Greeting name="Ma Ma" age={21} />
      <Button onClick={handleClick} />
      <Alert name="Ma Ma" age={22} />
      <Card title="Javascript" description="Hello Javascript" />
      <Card title="OOPP" description="Hello OOPP" />
      <Profile user={user} />
      <StudentList student={student} />
      <AuthContext />
      <Footer />
    </div>
  );
}
