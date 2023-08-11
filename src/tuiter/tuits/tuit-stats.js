import React, { useState } from "react";
import { FaRegComment, FaRetweet, FaRegHeart, FaHeart, FaRegShareSquare, FaRegThumbsDown, FaThumbsDown } from 'react-icons/fa';
import './tuit-stats.css';
import { useDispatch } from "react-redux";

const TuitStats = ({ liked: initialLiked, dislikes: initialDislikes, replies, retuits, likes: initialLikes }) => {
    const [liked, setLiked] = useState(initialLiked);
    const [likes, setLikes] = useState(initialLikes);
    const [disliked, setDisliked] = useState(initialDislikes);
    const [dislikes, setDislikes] = useState(0);

    const handleLikeClick = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    };

    const handleDislikeClick = () => {
        setDisliked(!disliked);
        setDislikes(disliked ? dislikes - 1 : dislikes + 1);
    };

    return (
        <div className="row">
            <div className="col">
                <FaRegComment /> {replies}
            </div>
            <div className="col">
                <FaRetweet /> {retuits}
            </div>
            <div className="col" onClick={handleLikeClick}>
                {liked ? <FaHeart className="liked" /> : <FaRegHeart />} {likes}
            </div>
            <div className="col" onClick={handleDislikeClick}>
                {disliked ? <FaThumbsDown className="disliked" /> : <FaRegThumbsDown />} {dislikes}
            </div>
            <div className="col">
                <FaRegShareSquare className="align-icon" />
            </div>
        </div>
    );
};

export default TuitStats;
