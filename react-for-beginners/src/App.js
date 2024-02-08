import Button from './Button';
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <p className={styles.title}>Welcome Back!</p>
      <Button text={"button"}/>
    </div>
  );
}

export default App;
