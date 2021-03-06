import React from 'react'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer';
import Link from 'next/link';

const PostDetail = ( {post} ) => {

    const getContentFragment = ( index, text, obj, type ) => {
        let modifiedText = text;

        if (obj) {
            if ( obj.bold ) {
                modifiedText = (<b key={index}>{ text }</b>)
            }
            if ( obj.italic ) {
                modifiedText = (<em key={index}>{ text }</em>)
            }
            if ( obj.underline ) {
                modifiedText = (<u key={index}>{ text }</u>)
            }
            if ( obj.href ) {
                modifiedText = (<a href={obj.href} className='text-blue-500'> {obj.children[0].text}</a>)
            }
        }



        switch (type) {
            case 'heading-one':
               return <h1 key={index} className="text-3xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
            case 'heading-two':
                return <h2 key={index} className="text-2xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
            case 'heading-three':
              return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
            case 'paragraph':
              return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            case 'heading-four':
              return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
            case 'image':
              return (
                <div className='flex justify-center'>
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                        />
                </div>
                
              );
            case 'iframe':
                return(
                    <div className='flex justify-center sm:mb-4'>
                        <iframe id='video' 
                            height={obj.height}
                            width={obj.width} 
                            src={obj.url}
                        >
                        </iframe> 
                    </div>
                     
                )
            default:
              return modifiedText;
          }
    }

    return (
        <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden flex justify-center mb-6'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='object-top lg:h-96 w-auto rounded-lg'
                />
            </div>
            <div className='px-2 md:px-4'>
                <div className='flex items-center mb-8 w-full'>
                    <div className='flex items-center lg:mb-0 w-full lg:w-auto mr-8'>
                        <img
                            alt={post.author.name}
                            height="30px"
                            width='30px'
                            className='align-middle rounded-full'
                            src={post.author.photo.url}
                        />
                        <p className='inline align-middle text-gray-700 ml-2 text-lg whitespace-nowrap'>{post.author.name}</p>
                    </div>
                    <div className='font-medium text-gray-700 whitespace-nowrap'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="align-middle">{moment(post.releaseDate).format('MMM DD, YYYY')}</span>
                    </div>
                </div>
                <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
                {post.content.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item ))

                    return getContentFragment(index, children, typeObj, typeObj.type)
                })}
            </div>
        </div>
    )
}

export default PostDetail
