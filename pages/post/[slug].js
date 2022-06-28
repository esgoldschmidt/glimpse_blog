import React from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header.jsx'
import HeaderSite from '../../components/HeaderSite.jsx'

import { getPosts, getPostDetails } from '../../services';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader  } from '../../components';

const PostDetails = ({ post }) => {
    const router = useRouter()
    
    if (router.isFallback){
        return <Loader />
    }
    return (
        
        <div className='container mx-auto px-10 mb-8'>
        <HeaderSite />
        <div className='mt-28'>
            <Header />
        </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8'>
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug} />
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
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