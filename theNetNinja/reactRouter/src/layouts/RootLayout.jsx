import { Link, NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
    <header>
      <nav>
        <h1>Jobarouter</h1>
        <Link to='/'>Home</Link>
        <NavLink to='about'>about</NavLink>
        <NavLink to='help'>help</NavLink>
      </nav>
    </header>

    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default RootLayout