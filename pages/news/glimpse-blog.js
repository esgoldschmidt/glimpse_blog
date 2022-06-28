import { PostCard, Categories, PostWidget, FeaturedPosts } from "../../components";
import { getPosts } from '../../services';
import HeaderSite from '../../components/HeaderSite.jsx'
import Header from '../../components/Header.jsx'
import Head from 'next/head';


export default function Blog({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>VR and AR Insights | Industry news and key trends </title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name="description"
          content="Insightful and thought-provoking articles on the world of VR, AR, and the metaverse, according to industry experts."
        />
      </Head>
      <HeaderSite />
      <div className='mt-28'>
        <Header />
      </div>
      
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