import type { NextPage } from "next";
import Layout from "../../layouts/Layout";
import AppHeader from "../../components/header/Header";
import { API_FAQ, API_FEATURES, API_PRICING } from "../../server/api";
import Features from "../../components/features/Features";
import { Feature, Price, Question } from "../../types";
import Details from "../../components/details/Details";
import Invitation from "../../components/invitation/Invitation";
import Pricing from "../../components/pricing/Pricing";
import FAQ from "../../components/faqs/FAQ";
import Head from "next/head";

type HomeProps = {
  features: Feature[];
  pricing: Price[];
  faq: Question[];
}

const Home: NextPage<HomeProps> = ({features, pricing, faq}) => {
  return (
    <Layout>
      <Head>
        <title>EasyFisco</title>
        <meta name="description" content="EasyFisco gestisce i clienti e la fiscalità per te, per darti modo di dedicare il tuo tempo alle cose più importanti" />
      </Head>

      <AppHeader />

      <Features items={features}/>

      <Details />

      <Invitation />

      <Pricing items={pricing} />

      <FAQ items={faq}/>
    </Layout>
  )
}

export async function getStaticProps(){
  try{
      const responseFeatures = await fetch(API_FEATURES);
      const features = await responseFeatures.json();

      const responsePricing = await fetch(API_PRICING);
      const pricing = await responsePricing.json();

      const responseFAQ = await fetch(API_FAQ);
      const faq = await responseFAQ.json();

      if(!responseFeatures.ok || !responsePricing.ok || !responseFAQ.ok){
        return{
          notFound: true
        }
      }

      return{
        props: {features, pricing, faq}
      }
  }catch(error){
    return{
      notFound: true
    }
  }
}

export default Home