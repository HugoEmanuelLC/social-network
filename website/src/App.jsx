import { useEffect, useState, useRef } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
// Components
import Header from './components/header'
import Loading from './components/loading'
// Screens
import Login from './screens/login'
import Home from './screens/home'
import PageTest from './screens/pageTest'


function App() {
  const [token, setToken] = useState('')
  const [showLoading, setShowLoading] = useState(true)

  const verifToken = () => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }else {
      setToken(null)
    }
  }

  useEffect(() => {
    verifToken()
  }, [])

  useEffect(() => {
    if (token !== '' && token !== null) {
      let timer = setTimeout(() => {
        setShowLoading(false)
      }, 2000)
      return () => {
        clearTimeout(timer)
      }
    }else{
      let timer = setTimeout(() => {
        setShowLoading(false)
      }, 2000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [token])

  return (
    <>
      <Routes>
        <Route path='/' element={
          showLoading ? <Loading /> : 
            token ? <Structure tag={<Home />} /> : <Login />
        }/>

        <Route path='/accueil' element={
          showLoading ? <Loading /> : 
            token ? <Structure tag={<PageTest />} /> : <Login />
        } />

        <Route path='/*' element={<h1>Erreur 401</h1>} />
      </Routes>
    </>
  )
}
export default App


function Structure({tag}) {
  const navbar = useRef(null)
  const modal = useRef(null)

  const handleNavbar = () => {
    navbar.current.className === 'nav_off' ? 
    navbar.current.className = 'nav_on' : 
    navbar.current.className = 'nav_off'
  }

  const handleModalUser = () => {
    modal.current.className === 'modal modal_off' ? 
    modal.current.className = 'modal modal_on' : 
    modal.current.className = 'modal modal_off'
}

  return (
    <>
      <Header handleNavbar={handleNavbar} handleModalUser={handleModalUser} />

      <main>
        <div className="container">
            <nav ref={navbar} className='nav_off' onClick={handleNavbar}>
                <ul>
                    <li>
                        <NavLink to="/accueil">Ami(e)s</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profil">Social Groups</NavLink>
                    </li>
                    <li>
                        <NavLink to="/parametres">Paramètres</NavLink>
                    </li>
                </ul>
            </nav>

            <div ref={modal} className="modal modal_off" onClick={handleModalUser}>
                <div className="modal_user">
                    <div className="user">
                        <span className="logo">SN</span>
                        <span className="name">Serge Nana</span>
                    </div>
                    <div className="btn">
                        <button onClick={()=> {
                          localStorage.removeItem('token')
                          window.location.href = '/'
                        }}>Déconnexion</button>
                    </div>
                </div>
            </div>

            {tag}
        </div>
      </main>
    </>
  )
}