import './pag404.scss';
import { Link } from "react-router-dom";

function Pag404() {
    return ( 
        <section className="page-404">
            <Link to="/">
                <h1>YouPics</h1>
            </Link>
            <span>Erro 404 - Página não encontrada</span>
        </section>
     );
}

export default Pag404;