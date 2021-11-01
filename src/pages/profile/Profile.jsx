import './profile.scss';
import Header from "../../components/header/Header";
import CardPost from '../../components/cardpost/CardPost';
import {Users, Posts} from '../../data/data.js';
import { useParams } from 'react-router';
import { useRef, useState } from 'react';

function Feed(props) {
    const {username} = useParams();
    const newImg = useRef();
    const newText = useRef();
    const currentUser = Users.filter(user => user.username === username);    
    const profilePosts = Posts.filter( post => post.userId === currentUser[0].id);
    const postCount = profilePosts.length;   


    return ( 
        <>
            <Header user={props.user}/>
            <section className="wrapper-feed">
                <div className="container">
                    <div className="profile-header">
                        <img src={`/img/users/${currentUser[0].username}.jpg`} alt={currentUser[0].username} className="profile-bigpic" />
                        <div className="profile-infos">
                            <h2>{currentUser[0].username}</h2>
                            <span className="cidade">Cidade: {currentUser[0].city}</span>
                            <div className="profile-numbers">
                                <span className="postagens"><strong>{postCount}</strong> postagens</span>
                                <span className="seguidores"><strong>{currentUser[0].followers}</strong> seguidores</span>
                                <span className="seguindo"><strong>{currentUser[0].following}</strong> seguindo</span>
                            </div>
                            <h3>Bio:</h3>
                            <p className="greet">{currentUser[0].greet}</p>
                        </div>
                    </div>                    
                    {profilePosts.map( post => {
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