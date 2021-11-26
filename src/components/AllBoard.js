import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowBoard from './ShowBoard'

const AllBoard = () => {
       const [board, setBoard] = useState([])
        const url = "/getboard"
        
     async function getBoard() {
        let  res = await  axios.get(url)
        setBoard(res.data)
        }
        useEffect( ()=> {
            getBoard()
        },[])
    return (
        <div>
            <ShowBoard board={board} getBoard={getBoard} />
        </div>
    )
}

export default AllBoard
