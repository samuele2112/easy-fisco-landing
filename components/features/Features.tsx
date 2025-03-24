import { useEffect, useState } from "react";
import { Feature } from "../../types";
import Layout from "../../layouts/Layout";
import Head from "next/head";

const Features: React.FC = () => {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        document.title = "EasyFisco - Funzionalità"; // Aggiorna subito il titolo
        const fetchFeatures = async () => {
            try {
                const res = await fetch("/api/features");
                if (!res.ok) {
                    throw new Error("Errore nel recupero delle feature");
                }
                const data: Feature[] = await res.json();
                setFeatures(data);
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

        fetchFeatures();
    }, []);

    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <Layout>
            <Head>
                <title>EasyFisco - Funzionalità</title>
            </Head>
            <div id="features" className="cards-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="heading">
                                EasyFisco ha tutte le caratteristiche di cui <span>hai bisogno</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {features.map((feature) => (
                                <div key={feature.id.toString()} className="card">
                                    <div className={`card-icon ${feature.iconColor}`}>
                                        <span className={feature.icon}></span>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">{feature.nome}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Features;