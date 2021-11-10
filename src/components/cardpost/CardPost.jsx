import './cardpost.scss';
import Heart from '../../img/heart.svg';
import HeartFilled from '../../img/heartFilled.svg';
import Comment from '../../img/comment.svg';
import Share from '../../img/share.svg';
import { useState, useRef, useContext } from 'react';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';
import {Users} from '../../data/data';
import { AuthContext } from "../../context/AuthContext";

function CardPost(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(props.likes);
    const [showComment, setShowComment] = useState(false);
    const {user} = useContext(AuthContext);
    const thisUserId = Users.find(thisuser => thisuser.username === user).id;
    const newComment = useRef();
    const [commentsState, setCommentsState] = useState(props.comments);    
    
    const handleNewComment = (e) => {
      e.preventDefault();     
        let newComments = commentsState ? [...commentsState] : [];
        let newId = Math.random() * (9000 - 10) + 10;
        newComments.push({id: newId,userId: thisUserId, comment: newComment.current.value})
        setCommentsState(newComments)  
        setShowComment(!showComment);    
    }

    const HandleLike = () => {
        setIsLiked(!isLiked);
        isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
    }

    const handleShowComment = () => {
      setShowComment(!showComment);     
    }

  return (
    <div className="card-post">
      <div className="card-post-header">
        <Link to={`/profile/${props.username}`} className="thumb-user">
          <img src={`/img/users/${props.username}.jpg`} alt="Usuário" />
          <h2>{props.username}</h2>
        </Link>
      </div>
      <img
        src={props.picture}
        alt="post"
        className="card-post-img"
        onDoubleClick={HandleLike}
      />
      <img src={HeartFilled} alt="Like" className={isLiked ? "like-anim like-anim-on" : "like-anim"} />
      <div className="post-infos">
        <div className="card-post-actions">
            <img src={isLiked ? HeartFilled : Heart} alt="Curtir" className="post-action" onClick={HandleLike} />
            <img src={Comment} alt="Comentários" className="post-action" onClick={handleShowComment} />
            <img src={Share} alt="Compartilhar" className="post-action" />
        </div>
        <span className="likes-count">{likes} curtidas</span>
        <div className="post-text">
            <a href={`/${props.user}`}>
                <span className="post-text-user">{props.username} </span>
            </a>
            <span className="post-text-desc">{props.text}</span>
        </div>
        {commentsState ? (
          <div className="card-comments">
            {commentsState.map(comment => {
              return (
                <div className="comment" key={comment.id}>
                  <a href={`/profile/${Users.find(user => user.id === comment.userId).username}`}>
                    <span className="post-text-user">{Users.find(user => user.id === comment.userId).username} </span>
                  </a>
                  <span className="post-text-desc">{comment.comment}</span>
                </div>
              )
            })}
          </div>
        ) : ''}
        <span className="how-long">{format(props.createdAt)}</span>
        {showComment ? 
          <form action="#" className="form-comment" onSubmit={handleNewComment}>
            <input type="text" className="comment-input" name="comment-input" placeholder="Comentar..." ref={newComment} required/>
            <button type="submit">
              Publicar
            </button>
          </form>
        : ''
        }
      </div>
    </div>
  );
}

export default CardPost;
