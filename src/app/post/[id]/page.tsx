import Link from "next/link"

export default function Post({ params }: { params: { id: string } }) {

  return (
    <main>
      <h1>Post #{params.id}</h1>
      <p>This is a post page #{params.id}</p>
      <Link href="/post">Go to Post</Link>
    </main>
  )
}