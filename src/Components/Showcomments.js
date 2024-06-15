import React from 'react'

export default function Showcomments(props) {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h5>Your Comments: {props.comments} </h5>
                </div>
            </div>
        </div>
    )
}
