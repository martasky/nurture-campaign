import Layout from "../components/layout";
import QuizContextWrapper from "../context/quizContextWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <QuizContextWrapper>
        <Component {...pageProps} />
      </QuizContextWrapper>
    </Layout>
  );
}

export default MyApp;
