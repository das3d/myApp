import React from 'react';
import s from './Friends.module.css';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';
import { followAPI } from '../../DAL/API';



let Friends = (props) => {
    let pagesCount = Math.ceil(props.totalCount / 1000);
    let pageNum = [];
    for (let i = 1; i <= pagesCount; i++) {
        pageNum.push(i);
    }
    return (<div>
        <div className={s.numP}>
            {pageNum.map(p => {

                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onChangePage(p) }}>{p}</span>
            })}
        </div>
        {props.friendsData.map(d => <div key={d.id}>
            <div className={s.image}>
                <NavLink to={`/Profile/${d.id}`}>
                    <img src={d.photos.small !== null ? d.photos.small : "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"} />
                </NavLink>
                <div className="">
                    {d.followed
                        ? <button onClick={() => {props.unfollowTH(d.id)}}>Unfollow</button>
                        : <button onClick={() => { props.followTH(d.id)}}>Follow</button>}
                </div>


            </div>
            <div className={s.description}>
                <div className="name">{d.name}</div>
                <div className="status">{d.status}</div>

            </div>
        </div>

        )
        }
    </div>)
}
export default Friends;