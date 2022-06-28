
import Head from 'next/head';
import Image from 'next/image';
import { PostCard, Categories, PostWidget, FeaturedPosts } from "../components";
import { getPosts } from '../services';
import Header from '../components/Header.jsx'


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-5 sm:px-10 mb-8">
      <Head>
        <title>The Glimpse Group | Virtual Reality | Augmented Reality</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}