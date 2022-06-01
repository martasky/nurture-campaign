import Layout from "../components/layout";
import MediaContextWrapper from "../context/mediaContext";
import QuizContextWrapper from "../context/quizContextWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MediaContextWrapper>
        <QuizContextWrapper>
          <Component {...pageProps} />
        </QuizContextWrapper>
      </MediaContextWrapper>
    </Layout>
  );
}

export default MyApp;
