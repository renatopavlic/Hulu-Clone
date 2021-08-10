import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import requests from "../utils/requests";
import Results from "../components/Results";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu | Renato</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  if (!req) {
    return {
      notFound: true,
    };
  }

  return { props: { results: req.results || requests.fetchTrending.url } };
}
