
async function CommerceDetail({params}) {

  const slug = (await params).slug

  console.log(slug)

  return (
    <main>
        <div>CommerceDetail</div>
        <p>{slug?.length > 1 ? slug.join(" / ") : "E-commerce" }</p>
    </main>
  )
}

export default CommerceDetail