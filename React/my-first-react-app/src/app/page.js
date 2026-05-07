import styles from "./page.module.css";
import Button from  "@/components/Button";
import Welcome from "../components/Welcome";
import Message from "../components/Message.js";
import Greeting from "../components/Greeting";
import Alert  from "@/components/Alert";
export default function Home() {
 return(
  <div className={styles.page}>
  <h1> Welcome from Home Page</h1>
  <Welcome/>
  <Message/>
  <Greeting name="Maria" age={12}/>
  <Greeting name="Alex" age={18}/>
  <Button/>
  <Alert name="Ma Ma" age={20}/>
  </div>
 );
}
