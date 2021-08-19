import { NavLink } from 'react-router-dom'

export const Header = () => {
    return(
      <div>
        <h1 className="text-main text-5xl text-center mt-5">Reactjs Advanced</h1>
        <nav className="mt-5 text-main text-xl">
            <NavLink to="/todo-app" className="block nav-header">Todo App</NavLink>
            <NavLink to="/random-quote" className="block nav-header">Random Quote</NavLink>
        </nav>
      </div>
    )
}