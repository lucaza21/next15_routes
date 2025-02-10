
async function ProjectDetail({params}) {

  const name = (await params).name
  console.log(name)
  return (
    <main>
        <div>ProjectDetail</div>
        {/* {params.name} */}
        {name}
    </main>
  )
}

export default ProjectDetail