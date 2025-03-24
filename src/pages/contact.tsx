import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../layouts/Layout";
import { useState } from "react";
import { ContactForm } from "../../types";
import { send } from "../../service/emailjs.service";

const ContactPage: NextPage = () => {
    const [form, setForm] = useState<ContactForm>({
        fullName: "",
        email: "",
        phoneNumber: "",
        coupon: "",
        hasPartitaIVA: "",
        privacy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!form.privacy) {
            alert("Devi accettare l'informativa sulla privacy.");
            return;
        }

        setIsSubmitting(true);
        try {
            await send(
                "Adriano",
                form.fullName,
                form.email,
                form.phoneNumber,
                form.coupon || '',
                form.hasPartitaIVA
            );
            alert("Email inviata con successo!");
            setForm({
                fullName: "",
                email: "",
                phoneNumber: "",
                coupon: "",
                hasPartitaIVA: "",
                privacy: false,
            });
        } catch (error) {
            alert("Errore durante l'invio dell'email. Riprova più tardi.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Layout>
            <Head>
                <title>EasyFisco - Contatti</title>
            </Head>
            <header id="header" className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="text-container mt-5">
                                <h1 className="h1-large">Vuoi saperne di più? <span className="replace-me">Contattaci</span></h1>
                                <p className="p-large">Siamo disponibili 24/7 per ripondere ad ogni tua domanda</p>
                                <a className="btn-solid-lg" href="#contact-form">Vai al form</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image
                                className="img-fluid"
                                src="/images/images.jpg"
                                width={400}
                                height={500}
                                layout="intrinsic"
                                quality={90}
                                alt="alternative"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div id="contact-form" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Compila il form <span>per essere contattato</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col mb-4 text-start">
                                        <label htmlFor="fullName" className="form-label">Nome e Cognome *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="Es. Mario Verdi"
                                            required
                                            value={form.fullName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col mb-4 text-start">
                                        <label htmlFor="email" className="form-label">Email *</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Es. mario.verdi@gmail.com"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col mb-4 text-start">
                                        <label htmlFor="phoneNumber" className="form-label">Telefono *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="Es. 334 01234567"
                                            required
                                            value={form.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col mb-4 text-start">
                                        <label htmlFor="coupon" className="form-label">Coupon</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="coupon"
                                            name="coupon"
                                            placeholder="Es. Coupon"
                                            value={form.coupon}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-check text-start">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="hasPartitaIVA"
                                            id="noPartitaIVA"
                                            value="no"
                                            checked={form.hasPartitaIVA === 'no'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="noPartitaIVA" className="form-check-label">
                                            Non ho una partita IVA e vorrei aprirne una
                                        </label>
                                    </div>
                                    <div className="form-check text-start">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="hasPartitaIVA"
                                            id="siPartitaIVA"
                                            value="si"
                                            checked={form.hasPartitaIVA === 'si'}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="siPartitaIVA" className="form-check-label">
                                            Ho già una partita IVA e vorrei passare a EasyFisco
                                        </label>
                                    </div>
                                    <div className="mt-4 form-check text-start">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="privacy"
                                            checked={form.privacy}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="privacy" className="form-check-label">
                                            Ho letto e accetto l'informativa sulla Privacy
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn-solid-lg" disabled={isSubmitting}>
                                    {isSubmitting ? "Invio in corso..." : "INVIA"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default ContactPage;