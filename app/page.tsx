import Link from "next/link";
import styles from "./about/styles.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <p>
        <Link href="/about">Go To About</Link>
      </p>
      <p>
        <Link href="/users">Go To Users</Link>
      </p>
    </main>
  );
}
