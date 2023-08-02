import React, { useState } from "react";
import { FaRegComment, FaRetweet, FaRegHeart, FaHeart, FaRegShareSquare } from 'react-icons/fa';
import './tuit-stats.css'; // Import the CSS file

const TuitStats = ({ liked: initialLiked, replies, retuits, likes: initialLikes }) => {
    const [liked, setLiked] = useState(initialLiked);
    const [likes, setLikes] = useState(initialLikes);

    const handleLikeClick = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
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
            <div className="col">
            <FaRegShareSquare className="align-icon" />
            </div>
        </div>
    );
};

export default TuitStats;
