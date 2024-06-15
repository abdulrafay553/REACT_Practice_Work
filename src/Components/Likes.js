import React, { useState } from 'react'
import Showlikes from './Showlikes'
import Showcomments from './Showcomments'
// import Wordcount from './Wordcount'

export default function Likes() {

    const [likeCounts, setLikeCounts] = useState(0)
    const [myComments, setMyComments] = useState('')
    const [val, setVal] = useState('');
    const [word, setWord] = useState('');

    const handleChange = (e) => {
        const data = e.target.value.split('')
        setVal(e.target.value)
        setWord(data.length)
    }


    function addcomments() {
        setMyComments(myComments)
    }

    function addLikes() {
        setLikeCounts(likeCounts + 1)
    }

    function removeLikes() {
        if (likeCounts <= 0) {
            setLikeCounts(likeCounts)
        } else {
            setLikeCounts(likeCounts - 1)
        }
    }

    return (
        <div className="container" >
            <br />
            <h1 style={{ "font-family": "Brush Script MT", }} >COMMENTS & LIKES</h1>

            <hr />
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        value={val}
                        className="form-control"
                        placeholder="Place Your Comments Here"
                        aria-label="comment"
                        // onChange={e => setMyComments(e.target.value)}
                        onChange={(e) => handleChange(e)}
                    />
                    <br />
                    <button type="button" className="btn btn-success" onClick={addcomments}>
                        Post Comments
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary" onClick={addLikes}>
                        Like
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger" onClick={removeLikes}>
                        Dislike
                    </button>
                    {/* <br />
                    <br /> */}

                </div>
            </div>
            <br />
            <h5>Letter count: {val.length}</h5>
            <h5>Word count: {word}</h5>
            <br />
            <Showlikes totalcount={likeCounts}></Showlikes>
            <Showcomments comments={myComments}></Showcomments>
            {/* <Wordcount words={ }></Wordcount> */}

        </div >

    )
}

