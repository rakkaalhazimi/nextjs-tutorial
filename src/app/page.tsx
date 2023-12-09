import Link from "next/link"


async function getHome() {
  const res = await fetch("http://localhost:3000/api", {method: "GET"})
  return res.text()
}

export default async function Home() {
  
  const content = await getHome()
  
  return (
    <main>
      <h1>Home</h1>
      <p>This is a home page</p>
      <p>
        <Link href="/about">Go to About</Link>
      </p>
      <p>
        <Link href="/post">Go to Post</Link>
      </p>
      <p>Content: {content}</p>
    </main>
  )
}
