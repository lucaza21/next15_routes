import Link from "next/link"

function InnerF2() {
  return (
    <>
    <div>InnerF2 Page</div>
    <Link href={"/f5"}> F5 link </Link>
    </>
  )
}

export default InnerF2