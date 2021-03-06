import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

//this is what get rendered on the client
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 3.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

//it only happens per page and you have to define it below
//to have sever side rendering, you need to add a special function that will tell this page is going to be server side rendered
//the context down below purpose is to tell next js what is the url that the user came in with (important details)
//the function below will get executed before the home function above
//this is what gets rendered on the server

export async function getServerSideProps(context) {
  //now lets pull out the genre from the url;
  const genre = context.query.genre;
  //make a request to the tmdb database after adding api in my environment
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  //now it rendered as a sever, now lets return it as a prop to our component

  return {
    props: {
      results: request.results,
    },
  };
}
