import Link from "next/link"

export default function Post() {
  return (
    <main>
      <h1>Post</h1>
      <p>This is a post page</p>
      <p>
        <Link href="/">Go to Home</Link>
      </p>

      <Link href="/post/1">Go to Post #1</Link>
    </main>
  )
}