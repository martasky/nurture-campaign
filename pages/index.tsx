import Head from "next/head";
import Hero from "../components/landingPage/hero";
import ProductExplanation from "../components/landingPage/productExplanation";
import ProductIntro from "../components/landingPage/productIntro";
import QuizSection from "../components/landingPage/quizSection";
import SocialProof from "../components/landingPage/socialProof";
import ValueProposition from "../components/landingPage/valueProposition";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nurture</title>
        <meta name="Finding a Nursery can be easy with Nurture" content="Campaign site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <ValueProposition />
      <ProductIntro />
      <SocialProof />
      <QuizSection />    
      <ProductExplanation />
    </>
  );
}
