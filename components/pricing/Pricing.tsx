import Link from "next/link";
import { Price } from "../../types";
import Image from "next/image";

interface PricingProps {
    items: Price[];
}

const Pricing: React.FC<PricingProps> = ({ items }) => {
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
                        {
                            items && items.map((item: Price) => {
                                return (

                                    <div className="card" key={items.indexOf.toString()}>
                                        <div className="card-body">
                                            <div className="card-title">
                                                <Image className="decoration-lines" src="/images/decoration.png" alt="alternative" width="30" height="10" />
                                                <span>{item.name}</span>
                                                <Image className="decoration-lines flipped" src="/images/decoration.png" alt="alternative" width="30" height="10" />
                                            </div>
                                            <ul className="list-unstyled li-space-lg">
                                                {
                                                    item.features.map((feature: String, index: number) => {
                                                        return (
                                                            <li key={`${feature}-${index}`}>{feature}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="price">{item.value}<span>/anno</span></div>
                                            <Link href="/contact" legacyBehavior>
                                                <a className="btn-solid-reg">Contattaci</a>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;