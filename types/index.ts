export type Feature ={

    id: number;
    nome: string;
    icon: string;
    iconColor: string;
    description: string;

}

export type Price={
    id: number;
    nome: string;
    description: string;
    value: string;
}

export type Question={
    id: string;
    title: string;
    answer: string;
}

export type ContactForm={
    fullName: string;
    email: string;
    phoneNumber: string;
    coupon?: string;
    hasPartitaIVA: string;
    privacy: boolean;
}