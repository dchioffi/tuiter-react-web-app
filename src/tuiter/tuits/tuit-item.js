import React from "react";
import TuitStats from './tuit-stats';
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import { BiX } from 'react-icons/bi';

const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch(); // Get the dispatch function

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id)); // Dispatch the deleteTuit action
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 pr-0">
                    <img width={50} className="rounded-circle" src={`/images/${tuit.image}`} />
                </div>
                <div className="col-10 pl-0">
                    <div><strong>{tuit.userName}</strong> {tuit.handle} . {tuit.time}</div>
                    <div>{tuit.title}</div>
                    <div>{tuit.tuit}</div>
                    <TuitStats liked={tuit.liked} replies={tuit.replies} retuits={tuit.retuits} likes={tuit.likes} />
                </div>
                <div className="col-1">
                    <BiX className="float-end" onClick={() => deleteTuitHandler(tuit._id)} size={20} />

                </div>

            </div>
        </li>
    );
};

export default TuitItem;
