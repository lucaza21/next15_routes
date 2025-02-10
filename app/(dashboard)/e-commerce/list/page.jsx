import Link from "next/link";
import styles from "./list.module.css";

function ProjectList() {
  return (
    <main>
        <div>ProjectList</div>
        <ul className={styles.ul}>
            <li>
                <Link href="/e-commerce"> e-c </Link>
            </li>
            <li>
                <Link href="/e-commerce/products"> products </Link>
            </li>
            <li>
                <Link href="/e-commerce/products/men"> Men </Link>
            </li>
            <li>
                <Link href="/e-commerce/products/woman/home"> Woman </Link>
            </li>
            
        </ul>
    </main>
  )
}

export default ProjectList