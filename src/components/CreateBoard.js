// import React, { useState } from 'react'
// import axios from 'axios'
// const CreateBoard = ({handleCreateBoard}) => {
//     const [data, setData] = useState({ boardName: "", desc: "" })
//     // const [hide, setHide] = useState(false);
//     // let url = `https://api.trello.com/1/boards/?name=${data.boardName}&desc=${data.desc}&token=ae0c65cd1aa179bb2e90e3a97dcf5b5a6805a8cc7b5f4fd571127a184ac1ec63&key=4ce042c548845caafe51783b5099769c`

//     // // axios.post(url)
//     // //     .then(res => console.log(res))
//     // //     .catch(err => console.log(err))

//     // function handleCreateBoard(e) {
//     //     e.preventDefault()
//     //     alert("Board created successfully");
//     //     setHide(true);
//     // }
//     return (
//         <div>
//             <form onSubmit={handleCreateBoard}>
//                 <div className="form-group">
//                     <label for="boardName">Board Name</label>
//                     <input type="text" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} name="boardName" className="form-control" id="boardName" />
//                 </div>
//                 <div className="form-group">
//                     <label for="boardDesc">Board Description</label>
//                     <textarea name="desc" onChange={e => setData({ ...data, [e.target.name]: e.target.value })} className="form-control" id="boardDesc" cols="30" rows="10"></textarea>
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                     <button type="submit" id="modelSaveBtn" className="btn btn-primary" data-dismiss="moda">Save changes</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default CreateBoard
