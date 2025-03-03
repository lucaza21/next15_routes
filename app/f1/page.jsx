import Link from "next/link"

function F1() {
  return (
    <>
    <h1>F1 page</h1>
    <Link href={"/f1/f2"}>F2</Link>
    </>
  )
}

export default F1