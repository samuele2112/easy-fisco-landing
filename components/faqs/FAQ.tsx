import { useState } from "react";
import { Question } from "../../types";

type FAQProps = {
    items: Question[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
    const [currentID, setCurrentId] = useState<String>(items[0].id);

    function handlerClick(id: String) {
        setCurrentId(currentID === id ? "" : id); // se la domanda selezionata è già espansa, la chiude
    }

    return (
        <div className="question">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="heading">Hai delle curiosità?</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="my-accordion" className="accordion">
                            {items.map((item: Question) => (
                                <div className="accordion-item" key={item.id.toString()}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${item.id}`}
                                            onClick={() => handlerClick(item.id)}
                                            aria-expanded={currentID === item.id ? "true" : "false"}
                                        >
                                            {item.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={`${item.id}`}
                                        className={`accordion-collapse collapse ${currentID === item.id ? "show" : ""}`}
                                        data-bs-parent="#my-accordion"
                                    >
                                        <div className="accordion-body">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;