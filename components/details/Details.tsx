import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../layouts/Layout";

const Details: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.asPath.includes("#details")) {
            document.getElementById("details")?.scrollIntoView({ behavior: "smooth" });
        }
    }, [router.asPath]);

    return (
        <Layout>
            <Head>
                <title>EasyFisco - Dettagli</title>
            </Head>
            <div id="details" className="basic-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="text-container">
                                <h2>Consulente Fiscale</h2>
                                <p>Ti proponiamo un consulente specializzato nel tuo business</p>
                                <a className="btn-solid-reg" href="#pricing">Prezzi</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="image-container">
                                <Image
                                    className="img-fluid"
                                    src="/images/details.jpg"
                                    alt="Consulente Fiscale"
                                    width={400}
                                    height={500}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="basic-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-7">
                            <div className="image-container">
                                <Image
                                    className="img-fluid"
                                    src="/images/details2.jpg"
                                    alt="Consulente Fiscale"
                                    width={400}
                                    height={500}
                                    layout="responsive"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-5">
                            <div className="text-container">
                                <h2>Applicazione web e mobile</h2>
                                <p>Gestisci tutta la tua attività in modo semplice e intuitivo.</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="d-flex">
                                        <i className="fas fa-square"></i>
                                        <div className="flex-grow-1"> Organizza i tuoi clienti e fornitori </div>
                                    </li>
                                    <li className="d-flex">
                                        <i className="fas fa-square"></i>
                                        <div className="flex-grow-1"> Crea le fatture in pochi secondi </div>
                                    </li>
                                    <li className="d-flex">
                                        <i className="fas fa-square"></i>
                                        <div className="flex-grow-1"> Ottieni una previsione di tasse e contributi </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Details;