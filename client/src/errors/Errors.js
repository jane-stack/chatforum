import { useContext } from "react"
import { ErrorsContext } from "../context/ErrorsContext";

const Errors = () => {
    const { errors } = useContext(ErrorsContext);

    const errorList = errors.map((error, idx) => <p key={idx}>{ error }</p>)

    return (
        <div className="errors">{ errorList }</div>
    )
}

export default Errors;