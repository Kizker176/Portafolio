import './qualification.css'

const Qualification = () => {
    return (
        <div>
            <span className="quali-text">My qualifications</span>
            <div className="qualifications-container">
                <div className="qualification">
                    <div className="content html"></div>
                    <h1>html</h1>
                </div>
                <div className="qualification">
                    <div className="content css"></div>
                    <h1>css</h1>
                </div>
                <div className="qualification">
                    <div className="content boostrap"></div>
                    <h1>boostrap</h1>
                </div>
                <div className="qualification">
                    <div className="content javascript"></div>
                    <h1>javascript</h1>
                </div>
                <div className="qualification">
                    <div className="content react"></div>
                    <h1>react</h1>
                </div>
            </div>
        </div>
    )
}

export default Qualification;