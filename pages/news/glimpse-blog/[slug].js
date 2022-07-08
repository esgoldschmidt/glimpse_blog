import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import HeaderSite from '../../../components/HeaderSite';
import Header from '../../../components/Header';
import ContactForm from '../../../components/ContactForm'
import FooterSite from '../../../components/FooterSite';

import { getPosts, getPostDetails } from '../../../services'; 

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader  } from '../../../components';

const PostDetails = ({ post }) => {
    const router = useRouter()
    
    if (router.isFallback){
        return <Loader />
    }
    return (
        
        <div>
            <Head>
                <title>{post.title}</title>
                <meta
                name="description"
                content={ post.description }
                />
            </Head>
            <HeaderSite />
            <div className='mt-32'>
                <Header />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 md:mx-4 mb-8'>
                <div className='col-span-1 lg:col-span-9'>
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug} />
                </div>
                <div className='col-span-1 lg:col-span-3'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                    </div>
                </div>
            </div>
            <ContactForm />
            <FooterSite />
        </div>
    )
}

export default PostDetails


// fetch data using getStaticProps using Next.js
export async function getStaticProps({ params }){
    //const posts = (await getPosts()) || [];
    const data = await getPostDetails(params.slug);
  
    return {
      props: { post: data }
    }
  }

export async function getStaticPaths(){
    const posts = await getPosts()

    return{
        paths: posts.map(( { node: { slug } }) => ({ params: { slug }} )),
        fallback: true,
    }
}