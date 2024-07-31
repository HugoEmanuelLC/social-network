import React, {useState, useRef, useEffect} from "react"
import {useNavigate} from 'react-router-dom'

export default function Header({handleNavbar, handleModalUser}) {
    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const search_input = useRef(null)
    const search_list = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit -> ");
        
        search_input.current.className === 'search_off' 
        ? search_input.current.className = 'search_on' 
        : search == '' ? 
            (search_input.current.className = 'search_off' ,
            search_list.current.className = 'list_search body_off'
            )
            : 
            search_list.current.className == 'list_search body_off' ?
                search_list.current.className = 'list_search body_on'
                :
                null
    }

    useEffect(() => {
        if(search !== '') {
            search_list.current.className = 'list_search body_on'
        }else {
            search_list.current.className = 'list_search body_off'
        }
    }, [search])

    return (
        <>
        <header>
            <div className="container">
                <div className="left">
                    <span className="logo" onClick={()=> navigate('/')}>
                        SN
                    </span>
                    <form className="form">
                        <button type="submit" className="btn_search" onClick={handleSubmit}>
                            <i className='bx bx-search' ></i>
                        </button>
                        <div ref={search_list} className="list_search body_off">
                            <input type="text" ref={search_input} 
                                className="search_off" placeholder="Search..." 
                                value={search} onChange={(e)=>setSearch(e.target.value)}
                            />
                            <div className="body">
                                <h3>Récent</h3>
                                <ul>
                                    <li>coucou X</li>
                                    <li>coucou X</li>
                                    <li>coucou X</li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
        
                <div className="right">
                    <div className="links" onClick={handleNavbar}>
                        <i className='bx bxs-grid'></i>
                    </div>
                    <a className='links notif_a'>
                        <i className='bx bxs-bell'></i>
                        <span>2</span>
                    </a>

                    <a className='links chat_a'>
                        <i className='bx bxs-message-rounded-dots'></i>
                    </a>

                    <a className='links profile_a' onClick={handleModalUser}>
                        <i className='bx bxs-user'></i>
                    </a>
                </div>
            </div>
        </header>
        </>
    )
}


