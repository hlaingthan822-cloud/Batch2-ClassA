import styles from "./page.module.css";
import Button from  "@/components/Button";
export default function Home() {
 return(
  <div className={styles.page}>
  <h1> Welcome from Home Page</h1>
  <Button/>
  </div>
 );
}
