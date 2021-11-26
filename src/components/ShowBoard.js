import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const ShowBoard = ({ board, getBoard }) => {
    const [data, setData] = useState({ boardName: "", desc: "" })

    function handleCreateBoard(e) {
        e.preventDefault()

        axios.post(`/createBoard?name=${data.boardName}&desc=${data.desc}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    alert("Board created successfully");
                    getBoard()
                }
                e.target.reset();
            })
            .catch(err => console.log(err))
    }

    function handleDeleteBoard(id) {
        let url = `/deleteBoard?id=${id}`
        axios.post(url)
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    alert("Board Deleted Successfully");
                    getBoard()
                }
            })
            .catch(err => console.log(err.msg))
    }

    if (!board) {
        return <h1 className="my-5">Loading....</h1>
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <h1 className="text-center">Create new board</h1>
                    <div className="">
                        <form onSubmit={handleCreateBoard}>
                            <div className="form-group">
                                <label htmlFor="boardName">Board Name</label>
                                <input type="text" required onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} name="boardName" className="form-control" id="boardName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="boardDesc">Board Description</label>
                                <textarea required name="desc" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} className="form-control" id="boardDesc" cols="30" rows="5"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Create Board</button>
                        </form>
                    </div>
                </div>

                {
                    board.length < 1 ? <h1 className="my-5"> Loading..... </h1> : <div className="col-md-6 ">
                        <h1 className="text-center">See all board</h1>
                        <table className="table border">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    board.length < 1 ? <td> <h1> Loading..... </h1> </td> : board.map((b, index) => (
                                        <tr key={index}>
                                            <td>{b.name} </td>
                                            <td className="description">{b.desc} </td>
                                            <td>
                                                <Link to={`viewboard/${b.id}`} className="btn btn-primary " >View</Link>
                                                <Link to={`update/${b.id}`} className="btn btn-warning mx-2 my-2 " >Edit</Link>
                                                <button onClick={() => handleDeleteBoard(b.id)} className="btn btn-danger " >Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                }

            </div>
        </div>
    )
}

export default ShowBoard;

