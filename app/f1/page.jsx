import Link from "next/link"

function F1() {
  return (
    <>
    <h1>F1 page</h1>
    <Link href={"/f1/f2"}>F2 link</Link>
    
    <Link href={"/f3"}>F3 link</Link>
    </>
  )
}

export default F1