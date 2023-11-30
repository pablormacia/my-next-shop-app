import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="navbar flex py-5 justify-between mx-2">
          <h1 className="text-3xl font-bold">Navbar</h1>
          <ul className="flex gap-x-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/tienda">Tienda</Link></li>
            <li><Link href="/posts">Posts</Link></li>
          </ul>
        </nav>
  )
}

export default Navbar