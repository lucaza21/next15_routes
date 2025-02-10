import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/projects/list"}>
        See Projects
      </Link>

      <Link href={"/shop/list"}>
        See Shop
      </Link>

      <Link href={"/e-commerce/list"}>
        See E-Commerce
      </Link>
      <h1>Home Page</h1>
    </main>
  );
}
