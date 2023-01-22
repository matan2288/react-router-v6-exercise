import './App.css'
import { Route, Routes, Link, useRoutes, NavLink, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { BookRoutes } from './BookRoutes'

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <>
    {/* <Routes>
      <Route path="/books" element={<h1>Render extra content with the same route here(useful for example: sidebar)</h1>}/>
    </Routes> */}
      <nav>
        <ul>
          <li>
            {/* <NavLink to="/" replace >Home</NavLink>  */}
            {/* NavLink is the same as Link but getting a custom styles trough different properties e.g. isActive , end */}
            <Link to="/" replace state="Hi">Home</Link> 
            {/* 
             replace > the replace property remove the place you visited from the history 
             reloadDocument > the reloadDocument property will reload the whole page and not render it
             state > will pass down state to the link without appearing on the url every time we click it
            */}
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />{/*For one route wich renders other nested routes  we add /* to the route(match anything after that route)  */}
        <Route path="*" element={<NotFound />} />
        <Route />
      </Routes>
    </>
  )
}

export default App



  //useRoute hook, Render routes with js and not JSX components
  // let element = useRoutes([
  //   {
  //    path:"/",
  //    element: <Home/>
  //   },
  //   {
  //     path:"*",
  //     element: <NotFound/>
  //   },

  // ])
  //then you render it in the jsx like that {element} and it will work the some
