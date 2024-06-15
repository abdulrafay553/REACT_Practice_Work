import React from 'react'

export default function Showlikes(props) {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h5>Total Likes: {props.totalcount} </h5>
                </div>
            </div>
        </div>
    )
}
