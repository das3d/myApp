import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
    
    if (props.friendsData.length === 0) {
        props.setData(
            [
                { name: "Shubert", id: 1, photos: { small: null, large: null }, status: null, followed: false },
                { name: "Hacker", id: 2, photos: { small: null, large: null }, status: null, followed: true },
                { name: "Shubert", id: 3, photos: { small: null, large: null }, status: null, followed: true }
            ]
        )
    }
    debugger
    return <div>
        {props.friendsData.map(d => <div key={d.id}>
            <div className={s.image}>
                <img src={d.photos.large} />
                <div className="">
                    {d.followed == true
                        ? <button onClick={() => { props.follow(d.id) }}>Follow</button>
                        : <button onClick={() => { props.unFollow(d.id) }}>Unfollow</button>}
                </div>


            </div>
            <div className={s.description}>
                <div className="name">{d.name}</div>
                <div className="status">{d.status}</div>

            </div>
        </div>

        )
        }
    </div>
}
export default Friends;