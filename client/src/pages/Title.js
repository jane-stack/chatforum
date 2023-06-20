// import { useEffect, useState } from "react";

// function Title({ topic, name, description }) {
//     const [ comments, setComments ] = useState([]);
//     const { id } = topic;

//     useEffect(() => {
//         fetch(`/topics/${id}/comments`)
//         .then(resp => resp.json())
//         .then(data => {
//             setComments(data)
//         })
//     },[id])

//     return (
//         <div>
//             <div>
//                 <h3>{ name }</h3>
//                 <p>{ description }</p>
//             </div>
//         </div>
//     )
// }

// export default Title;