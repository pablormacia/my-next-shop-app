import Users from "@/src/components/Users"

const HomePage = () => {
  return (
    <section>
      <h1>Hola mundo, Home page</h1>
      {/* {
        window.localStorage.getItem('token')
      } */}
      <Users />
    </section>
  )
}

export default HomePage