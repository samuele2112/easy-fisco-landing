import Link from "next/link";

const AppFooter: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-first">
                            <h6>EasyFisco</h6>
                            <p>Inizia da subito a risparmiare sul tuo tempo</p>
                        </div>
                        <div className="footer-second">
                            <h6>Link utili</h6>
                            <ul className="list-unstyled li-space-lg p-small">
                                <li>Importanti: Termini & Condizioni, Privacy Policy</li>
                                <li>Guide: Regime dei minimi, Cos'è una partita IVA, Fatturazione Elettronica</li>
                                <li>Supporto: <Link href="/contact" legacyBehavior><a>Contattaci</a></Link></li>
                            </ul>
                        </div>
                        <div className="footer-third">
                            <span className="fa-stack">
                                <Link href="/contact" legacyBehavior>
                                    <a>
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-facebook fa-stack-1x"></i>
                                    </a>
                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link href="/" legacyBehavior>
                                    <a>
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-twitter fa-stack-1x"></i>
                                    </a>
                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link href="/" legacyBehavior>
                                    <a href="">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-pinterest fa-stack-1x"></i>
                                    </a>
                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link href="/" legacyBehavior>
                                    <a>
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-instagram fa-stack-1x"></i>
                                    </a>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;