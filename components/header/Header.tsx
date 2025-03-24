import Image from "next/image";

const AppHeader: React.FC = () => {
    const scrollToFeatures = () => {
        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="text-container mt-5">
                            <h1 className="h1-large">
                                La moneta più importante che abbiamo
                                <span> è il tempo </span>
                            </h1>
                            <p className="p-large">
                                EasyFisco gestisce i clienti e la fiscalità per te, per darti modo di dedicare il tuo tempo alle cose più importanti
                            </p>
                            <button className="btn-solid-lg" onClick={scrollToFeatures}>
                                Dimmi di più
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Image
                            className="img-fluid"
                            src="/images/images.jpg"
                            width={400}
                            height={500}
                            layout="responsive"
                            alt="Easy Fisco Header image"
                            priority
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;