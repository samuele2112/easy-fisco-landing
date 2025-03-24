import { useState, useEffect } from "react";
import { Question } from "../../types";

const FAQ: React.FC = () => {
    const [items, setItems] = useState<Question[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentID, setCurrentId] = useState<string | null>(null);

    useEffect(() => {
        const fetchFAQ = async () => {
            try {
                const res = await fetch("/api/faq");
                if (!res.ok) {
                    throw new Error("Errore nel recupero delle FAQ");
                }
                const data: Question[] = await res.json();
                setItems(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Si è verificato un errore sconosciuto");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchFAQ();
    }, []);

    function handleClick(id: string) {
        setCurrentId(currentID === id ? "" : id);
    }

    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>Errore: {error}</p>;

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
                            {items.map((item) => (
                                <div className="accordion-item" key={item.id.toString()}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            onClick={() => handleClick(item.id.toString())}
                                            aria-expanded={currentID === item.id.toString() ? "true" : "false"}
                                        >
                                            {item.title}
                                            
                                        </button>
                                    </h2>
                                    <div
                                        id={`${item.id}`}
                                        className={`accordion-collapse collapse ${currentID === item.id.toString() ? "show" : ""}`}
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
};

export default FAQ;