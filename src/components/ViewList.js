import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ViewList = () => {
    const [data, setData] = useState({ cardName: "", desc: "" })
    const [cards, setCards] = useState()
    const { id } = useParams()

    function getCards() {
        let url = `/getCards?id=${id}`
        axios.get(url)
            .then(res => {
                setCards(res.data)
            })
            .catch(err => console.log(err.msg))
    }

    function handleCreateCard(e) {
        e.preventDefault()

        let url = `/createCard?name=${data.cardName}&idList=${id}`
        axios.post(url)
            .then(res => {
                if (res.status === 200) {
                    alert("New card is created");
                    getCards()
                    e.target.reset()
                }
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        getCards()
    }, [])

    if (!cards) {
        return <h1>Loading......</h1>
    }

    if (cards.length < 1) {
        <h1>No card is found</h1>
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5">
                    <h1> Create new card</h1>
                    <form onSubmit={handleCreateCard}>
                        <div className="form-group">
                            <label htmlFor="boardName">Card Name</label>
                            <input type="text" required onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} name="cardName" className="form-control" id="boardName" />
                        </div>
                        <button type="submit" className="btn btn-primary">Create Card</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h1>Card Lists </h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-header">Card Lists</h5>
                            <ul>
                                {
                                    cards ? cards.map((card, index) => (
                                        <li key={index}> {card.name} </li>
                                    ))
                                        : <h1> Nothing found </h1>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewList
