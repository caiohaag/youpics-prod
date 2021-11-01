import './feed.scss';
import Header from "../../components/header/Header";
import CardPost from '../../components/cardpost/CardPost';
import {Users, Posts} from '../../data/data.js';

function Feed(props) {
   
    return ( 
        <>
            <Header user={props.user}/>
            <section className="wrapper-feed">
                <div className="container">
                    {Posts.map( post => {                        
                        return (
                            <CardPost {...post} key={post.id} username={Users.find(user => user.id === post.userId).username}/>
                        )
                    })}                                        
                </div>
            </section>
        </>
     );
}

export default Feed;