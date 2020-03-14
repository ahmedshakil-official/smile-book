import React from 'react';
import {useState} from 'react';
import './smilebook.css'
import fakeData from '../../fakeData/fakeData';
import Poeple from '../Poeple/Poeple';
import Recent from '../Recent/Recent';
const Smilebook = () => {
   const [poeples, setPoeples] = useState([...fakeData]);
   const [count, setCount] = useState([])
   const recent3=[...fakeData].slice(10,13);
   const [recent, setRecent] = useState(recent3);

   const handleAddFriend=(friend)=>{
       const newCount=[...count,friend];
       setCount(newCount);
       const newPoeples=[...poeples].filter(p=>p.id!==friend.id);
       setPoeples(newPoeples);
   }
   const formatCount=()=>count.length===0 ? "Zero" : count.length
   const x= "badge m-2 badge-warning"
   const y="badge m-2 badge-primary"
   const badge=()=>count.length===0 ? x : y
   console.log(badge);

    return (
        <div className="poeple">
            <div className="recent friends">
                <h3>Recently Joined</h3>
                {
                    recent.map(rp=><Recent
                    poeple={rp}></Recent>)
                }
            </div>
            <div className="all-poeple">
                <h1>Friend Suggestion For You </h1>
                    {
                        
                        poeples.map(poeple=><Poeple 
                            poeple={poeple}
                            handleAddFriend={handleAddFriend}></Poeple>)
                    }
            </div>
            <div className="friends">
                <h3>Today's Report</h3>
                <h4> Friend Request sent :<span className={badge()}>{formatCount()}</span></h4>
            </div>
        </div>
    );
};

export default Smilebook;