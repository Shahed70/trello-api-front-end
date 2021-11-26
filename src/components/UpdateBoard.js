import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

const UpdateBoard = () => {
    const [data, setData] = useState({ boardName: "", desc: "" })
    const [board, setBoard] = useState()
    const nevigate = useNavigate()
    const { id } = useParams()


    function getSingleBoard() {
        let url = `/getSingleBoard?id=${id}`
        axios.get(url)
            .then(res => {
                setBoard(res.data)
            })
            .catch(err => console.log(err.msg))
    }

    useEffect(() => {
        getSingleBoard()
    }, [])


    function handleUpdateBoard(e) {
        e.preventDefault()
        axios.post(`/updateBoard`, { id: id, name: data.boardName, desc: data.desc })
            .then(res => {
                if (res.status === 200) {
                    alert("Board Updated successfully")
                    nevigate('/')
                }
                console.log("update data", res);
            }).catch(err => {
                alert(err.msg)
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <h1 className="text-center">Update Board</h1>
                    <div className="">
                        <form onSubmit={handleUpdateBoard}>
                            <div className="form-group">
                                <label htmlFor="boardName">Board Name</label>
                                <input type="text" placeholder={!board ? `name` : `${board.name}`} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} name="boardName" className="form-control" id="boardName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="boardDesc">Board Description</label>
                                <textarea name="desc" placeholder={!board ? `name` : `${board.desc}`} onChange={e => setData({ ...data, [e.target.name]: e.target.value })} className="form-control" id="boardDesc" cols="30" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Update Board</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateBoard
