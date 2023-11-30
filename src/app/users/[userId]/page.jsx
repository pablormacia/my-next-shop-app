"use client"
import { useParams } from "next/navigation"

const UsersPage = () => {
  const params = useParams()
  return (
    <div>
      <h1>UsersPage</h1>
    <button onClick={console.log(params)}>Click</button>
    </div>
  )
}

export default UsersPage