function Topic({ name, description }) {

    return (
        <div className="topic-div">
            <div className="box">
                <h3 onClick={() => console.log("CLICKED")}>{ name }</h3>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default Topic;