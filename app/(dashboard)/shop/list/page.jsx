import Link from "next/link";
import styles from "./list.module.css";

function ProjectList() {
  return (
    <main>
        <div>ProjectList</div>
        <ul className={styles.ul}>
            <li>
                <Link href="/shop"> shop </Link>
            </li>
            <li>
                <Link href="/shop/clothes"> Clothes </Link>
            </li>
            <li>
                <Link href="/shop/clothes/men"> Men </Link>
            </li>
            <li>
                <Link href="/shop/clothes/woman/tshirts"> Woman </Link>
            </li>
            
        </ul>
    </main>
  )
}

export default ProjectList