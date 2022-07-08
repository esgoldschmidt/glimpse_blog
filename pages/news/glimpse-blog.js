import { PostCard, Categories, PostWidget, FeaturedPosts, FeaturedPostsCard } from "../../components";
import { getPosts } from '../../services'; 
import HeaderSite from '../../components/HeaderSite.jsx'
import ContactForm from '../../components/ContactForm'
import Header from '../../components/Header.jsx'
import FooterSite from '../../components/FooterSite.jsx'
import Head from 'next/head';


export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>VR and AR Insights | Industry news and key trends </title>
        <meta
          name="description"
          content="Insightful and thought-provoking articles on the world of VR, AR, and the metaverse, according to industry experts."
        />
      </Head>
      <HeaderSite />
      <div className="container mx-auto lg:px-10 mb-8">
        <div className='mt-32'>
          <Header />
        </div>
        <div className="text-center gap-4 flex flex-wrap justify-center pb-4 w-full">
          {posts.map((post, index) => (
            <FeaturedPostsCard key={index} post={post.node} />
          ))}
        </div>
      </div>
      <ContactForm />
      <FooterSite />
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