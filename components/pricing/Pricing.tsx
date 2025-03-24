import { useState, useEffect } from "react";
import Link from "next/link";
import { Price } from "../../types";
import Image from "next/image";

const Pricing: React.FC = () => {
    const [items, setItems] = useState<Price[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPricing = async () => {
            try {
                const res = await fetch("/api/pricing");
                if (!res.ok) {
                    throw new Error("Errore nel recupero dei piani di prezzo");
                }
                const data: Price[] = await res.json();
                setItems(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Si è verificato un errore sconosciuto");
            } finally {
                setLoading(false);
            }
        };

        fetchPricing();
    }, []);

    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>Errore: {error}</p>;
    if (!items || items.length === 0) return <p>Nessun piano disponibile</p>;

    return (
        <div className="cards-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="heading">Un piano per ogni esigenza</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {items.map((item) => (
                            <div className="card" key={item.id.toString()}>
                                <div className="card-body">
                                    <div className="card-title">
                                        <Image
                                            className="decoration-lines"
                                            src="/images/decoration.png"
                                            alt="alternative"
                                            width={30}
                                            height={10}
                                        />
                                        <span>{item.nome}</span>
                                        <Image
                                            className="decoration-lines flipped"
                                            src="/images/decoration.png"
                                            alt="alternative"
                                            width={30}
                                            height={10}
                                        />
                                    </div>
                                    <ul className="list-unstyled li-space-lg">
                                        {item.description.split("\n").map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                    </ul>
                                    <div id="price" className="price">
                                        {item.value}
                                        <span>/anno</span>
                                    </div>
                                    <Link href="/contact" legacyBehavior>
                                        <a className="btn-solid-reg">Contattaci</a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;