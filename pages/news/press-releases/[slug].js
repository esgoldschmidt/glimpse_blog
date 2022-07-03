import React, { useState, useEffect, useRef } from 'react';
import allreleases from '../../../components/data/Releases/allreleases'
import { Loader, PostDetail, Author } from '../../../components'
import HeaderSite from '../../../components/HeaderSite';
import FooterSite from '../../../components/FooterSite';
import { useRouter } from 'next/router'
import Head from 'next/head';

import { getPressReleases, getPressReleaseDetails } from '../../../services'; 


function SingleRelease ({ pressRelease }) {
  const router = useRouter()

  if (router.isFallback){
    return <Loader />
  }

  console.log( pressRelease )

  return (
    <div className="SingleRelease">
      <Head>
          <title>{pressRelease.title}</title>
          <meta
          name="description"
          content={ pressRelease.description }
          />
      </Head>
      <HeaderSite />
      
      <div className='w-full px-3 sm:px-12 py-6 mt-28'>
        <div className='container mx-auto px-10 mb-8 relative'>
            <div className='text-glimpse-blue absolute inset-y-1/3 transition duration-300 ease hover:-translate-y-0.5 hover:text-gray-600'>   
                <i className="fas fa-arrow-left"></i>
                <a href="/news/press-releases" className='ml-2 hover:text-gray-600'>All Press</a>
            </div>
            
            <div className='m__bottom m__top flex justify-center'>
                <h1 className="text-gray-500 font-light text-4xl my-3" style={{ fontFamily: 'Montserrat' }}>Press Release</h1>
            </div>
        </div>
        <div>
            <PostDetail post={pressRelease} />
            <Author author={pressRelease.author} />
        </div>
      </div>
      <FooterSite />
    </div>
  )
}

export default SingleRelease;

// fetch data using getStaticProps using Next.js
export async function getStaticProps({ params }){
  //const posts = (await getPosts()) || [];
  const data = await getPressReleaseDetails(params.slug);

  return {
    props: { pressRelease: data }
  }
}

export async function getStaticPaths(){
  const pressReleases = await getPressReleases()

  return{
      paths: pressReleases.map(( { node: { slug } }) => ({ params: { slug }} )),
      fallback: true,
  }
}