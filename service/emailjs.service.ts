export async function send(
    to_name: string,
    from_name: string,
    email: string,
    phoneNumber: string,
    coupon: string,
    hasPartitaIVA: string
) {
  const data = {
    service_id: "service_ux6drop",
    template_id: "template_2cvjysl",
    user_id: "LKVipzaZT3o2NMOmp",  // Qui va la public key di EmailJS
    template_params: {
        to_name,
        from_name,
        email,
        phoneNumber,
        coupon,
        hasPartitaIVA,
    },
  };

  console.log("Dati inviati a EmailJS:", JSON.stringify(data, null, 2));

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const responseText = await res.text();
    console.log("EmailJS Response:", responseText);

    if (!res.ok) {
      throw new Error(`Errore nell'invio della mail: ${responseText}`);
    }

    return res;
  } catch (error) {
    console.error("Errore durante l'invio della mail:", error);
    throw error;
  }
}