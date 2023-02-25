import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>Websit Help</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda voluptas quaerat, iste ullam accusamus natus. Enim fugit unde sequi sint?</p>
        <nav>
            <NavLink to='faq'>faq</NavLink>
            <NavLink to='contact'>contact</NavLink>
        </nav>
        <main><Outlet/></main>
    </div>
  )

}

export default HelpLayout
