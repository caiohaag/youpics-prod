import './header.scss'
import Home from '../../img/home.svg';
import Exit from '../../img/exit.svg';
import Search from '../../img/search.svg';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

function Header(props) {  
    const {dispatch} = useContext(AuthContext);

    const handleSearch = (e) => {
        e.preventDefault();
    }

    const handleLogoff = (e) => {
        e.preventDefault();        
        dispatch({ type: "LOGIN_SUCCESS", payload: null});
        localStorage.removeItem("userlogin");    
    }

    return ( 
        <header className="topbar">
            <div className="container">
                <h1>
                    <Link to="/" className="logo-top">
                        YouPics
                    </Link>
                </h1>
                <div className="header-icons">
                    <form action="#" className="form-search" onSubmit={handleSearch}>
                        <input type="text" name="search" id="search" placeholder="Pesquisar" />
                        <button type="submit" className="btn-search">
                            <img src={Search} alt="Pesquisar" />
                        </button>
                    </form>
                    <Link to="/" className="btn-ico-header btn-home">
                        <img src={Home} alt="Página Inicial" />                        
                    </Link>
                    <Link to="/settings" className="btn-ico-header btn-settings" onClick={handleLogoff}>
                        <img src={Exit} alt="Configurações" />
                    </Link>
                    <Link to={`/profile/${props.user}`} className="btn-user">                        
                        <img src={`/img/users/${props.user}.jpg`} alt="Usuário" />
                    </Link>
                </div>
            </div>
        </header>
     );
}

export default Header;