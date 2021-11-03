import "./searchUsers.scss";
import Header from "../../components/header/Header";
import { useParams } from "react-router";
import { Users } from "../../data/data.js";
import { Link } from "react-router-dom";

function SearchUsers(props) {
  const { search } = useParams();
  const searchResult = Users.filter(function (user) {
    return user.username.includes(search);
  });

  return (
    <>
      <Header user={props.user} />
      <section className="wrapper-search-users">
        <h2 className="titulo-busca">Resultado da busca:</h2>
        <div className="container">
          {searchResult.length > 0 ? (
            searchResult.map((user) => {
              return (
                <Link
                  to={`/profile/${user.username}`}
                  className="user-card"
                  key={user.id}
                >
                  <img
                    src={`/img/users/${user.username}.jpg`}
                    alt={user.username}
                    className="user-pic"
                  />
                  <h2>{user.username}</h2>
                </Link>
              );
            })
          ) : (
            <span>Nenhum usuário encontrado</span>
          )}
        </div>
      </section>
    </>
  );
}

export default SearchUsers;
