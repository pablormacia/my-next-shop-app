"use client"
import { useRouter } from "next/navigation"

/* const metadata = {
  title: "Acerca de"
}
 */
const AboutPage = () => {
  const router = useRouter() //solo en componentes cliente
  return (
    <section>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus necessitatibus debitis labore non at repellat voluptates natus asperiores? Modi eius sapiente veritatis soluta facere aliquam et quos impedit rerum iure ut, eveniet consequuntur, vel aut dignissimos explicabo odio similique voluptates fugiat optio quam eligendi. Provident dignissimos deserunt sint atque necessitatibus, ipsam esse voluptatem consectetur incidunt veniam deleniti quibusdam cupiditate harum. Quidem enim, accusamus dolorum inventore dolore dignissimos asperiores sit! Nemo eum architecto iure quos, reprehenderit fuga saepe placeat magni quis, itaque quidem eius est possimus, minima pariatur illo molestiae vel corporis. Magnam provident placeat, quis nam aut dolores voluptas quia.</p>
      <button
        className="bg-sky-400 rounded-md px-3 py-2"
        onClick={()=>{
          alert("Executing some code before redirecting")
          router.push('/')
        }}
      >
        Click
      </button>
    </section>
  )
}

export default AboutPage