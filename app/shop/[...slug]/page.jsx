
async function ShopDetail({params}) {

  const slug = (await params).slug

  console.log(slug)

  return (
    <main>
        <div>ShopDetail</div>
        <p>{slug.join(" / ")}</p>
    </main>
  )
}

export default ShopDetail