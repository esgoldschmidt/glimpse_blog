import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header.jsx'
import HeaderSite from '../../components/HeaderSite.jsx'
import Head from 'next/head';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  let {slug} = router.query
  if (slug === "virtual-reality"){
    slug = "Virtual Reality"
  } else if (slug === "augmented-reality"){
    slug = "Augmented Reality"
  }

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>{slug} insights | Industry news and key trends</title>
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}