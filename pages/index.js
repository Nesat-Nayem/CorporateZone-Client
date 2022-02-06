import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>webdev news</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      
      <h1>hello next</h1>
      <a href="/about">about</a>
    </div>
  );
}
