"use client";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Welcome from "../components/Welcome";
import Message from "../components/Message.js";
import Greeting from "../components/Greeting";
import Alert from "@/components/Alert";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Profile from "../components/Profile";
import StudentList from "../components/StudentList";
import InputExample from "@/components/InputExample";
export default function Home() {
  const user = { name: "Alice", age: 18, country: "Signpore" };
  const students=["Alice","Maria","John"];
  function handleClick(){
    alert("Button clicked");
  }
  return (
    <div>
      <InputExample/>
      <h1> Welcome from Home Page</h1>
      <Welcome />
      <Message />

      <Greeting name="Maria" age={12} />
      <Greeting name="Alex" age={18} />
      <Button onClick={handleClick}/>
      <Alert name="Ma Ma" age={20} />

      <Header />
      <main>
        <Card
          title="React Basis"
          description="Learn about components and props"
        />
        <Card
          title="Next.js App Router"
          description="Bulid pages with morder routing"
        />
      </main>
      <Footer />
      <h1>Profile</h1>
      <Profile user={user} />
      <StudentList students={students}/>
    </div>
  );
}
