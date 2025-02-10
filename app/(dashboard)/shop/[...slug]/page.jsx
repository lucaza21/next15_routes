
async function ShopDetail({params}) {

  const slug = (await params).slug

  console.log(slug)

  return (
    <main>
        <div>ShopDetail</div>
        <p>{slug?.length > 1 ? slug.join(" / ") : "shop" }</p>
    </main>
  )
}

export default ShopDetail