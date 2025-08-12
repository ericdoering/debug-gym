import { useEffect, useRef } from "react";

export default function SideNav (props) {
    const questions = ["hello", "world"]; 
    const { showNav, setShowNav } = props;
    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowNav(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowNav]);

    return (
        <>
            <section ref={ref} className={"nav " + (showNav ? "" : "hidden-nav")}>
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
                            <button key={idx} className="card-button-secondary list-btn">
                                <p>{question}</p>
                                    <small>DATETIME</small>
                                        <div className="delete-btn">
                                            <i className="fa-solid fa-trash-can"></i>
                                        </div>
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