import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewBoard = () => {
    const [data, setData] = useState({ boardName: "", desc: "" })
    const [boards, setBoard] = useState([])
    const { id } = useParams()

    function handleCreateList(e) {
        e.preventDefault()
        let url = `/createList?name=${data.boardName}&idBoard=${id}`
        axios.post(url)
            .then(res => {
                if (res.status === 200) {
                    alert("New list is created");
                    getBoardLists()
                    e.target.reset()
                }
            }).catch(err => console.log(err))
    }

    function getBoardLists() {
        let url = `/getLists?id=${id}`
        axios.get(url)
            .then(res => {
                setBoard(res.data)
            })
            .catch(err => console.log(err.msg))
    }
    useEffect(() => {
        getBoardLists()
    }, [])

    if (!boards) {
        return <h1>Loading.....</h1>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h1> Create new List</h1>
                    <form onSubmit={handleCreateList}>
                        <div className="form-group">
                            <label htmlFor="boardName">List Name</label>
                            <input type="text" required onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} name="boardName" className="form-control" id="boardName" />
                        </div>

                        <button type="submit" className="btn btn-primary">Create List</button>
                    </form>
                </div>

                {
                    boards.length < 1 ? <h1>Loading......</h1> : <div className="col-md-6 ">
                        <h1>Board Lists </h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th className="invisible">Name</th>
                                    <th className="invisible">Name</th>
                                    <th className="text-center">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    boards.map((list, index) => (
                                        <tr key={index}>
                                            <td>
                                                {list.name}
                                            </td>
                                            <td> </td>
                                            <td> </td>
                                            <td>
                                                <Link to={`viewlist/${list.id}`} className="btn btn-primary">View List</Link>
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

export default ViewBoard
