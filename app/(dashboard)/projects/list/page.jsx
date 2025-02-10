import Link from "next/link";
import styles from "./list.module.css";

function ProjectList() {
  return (
    <main>
        <div>ProjectList</div>
        <ul className={styles.ul}>
            <li>
                <Link href="/projects/jobit"> Jobit </Link>
            </li>
            <li>
                <Link href="/projects/carrent"> Carrent </Link>
            </li>
            <li>
                <Link href="/projects/hipnode"> Hipnode </Link>
            </li>

            
        </ul>
    </main>
  )
}

export default ProjectList