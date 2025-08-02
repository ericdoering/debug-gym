export default function SideNav () {
    const questions = ["hello", "world"] 
    const showNav = false;
    return (
        <>
            <section className={"nav " + (showNav ? "" : "hidden-nav")}>
                <h1 className="text-gradient">Debug Gym</h1>
                <h6>Where Bugs Build Better Devs.</h6>
                <div className="full-line"></div>
                <button>
                    <h6>New Question</h6>
                    <i className="fa-solid fa-plus"></i>
                </button>
                <div className="questions-list">
                    {questions.length === 0 ? 
                    <p>No Questions added yet.</p> :
                    questions.map((question, idx) => {
                        return (
                            <button key={idx} className="card-button-secondary">
                                <p>{question}</p>
                                <small>DATETIME</small>
                                DELETE BUTTON ICON
                            </button>
                        )
                    })}
                </div>
                <div className="full-line"></div>
                <button>
                    <h6>Logout</h6>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </section>
        </>
    )
};