import React from "react";
import {useSelector} from "react-redux";
import TuitSummaryItem
  from "./tuit-summary-item";

const TuitSummaryList = () => {
  const { tuits } = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
         <TuitSummaryItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 )
};
export default TuitSummaryList;