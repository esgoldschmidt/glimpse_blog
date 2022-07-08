import { request, gql } from 'graphql-request'
import axios from 'axios';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection(orderBy: releaseDate_DESC) {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                            url
                            }
                        }
                        createdAt
                        releaseDate
                        slug
                        title
                        description
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}

export const getPressReleases = async () => {
    const query = gql`
        query MyQuery {
            pressReleasesConnection(orderBy: releaseDate_DESC) {
                edges {
                    node {
                        releaseDate
                        releaseYear
                        slug
                        title
                        featuredImage {
                            url
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.pressReleasesConnection.edges;
}

export const getPressCoverage = async () => {
    const query = gql`
        query MyQuery {
            pressCoveragesConnection {
                edges {
                    node {
                        coverageDate
                        coverageYear
                        mediaOutlet
                        linkToCoverage
                        title
                        featuredImage {
                            url
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.pressCoveragesConnection.edges.reverse();
}

export const getPostDetails = async (slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            post(where: { slug: $slug }){
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                createdAt
                slug
                title
                description
                featuredImage {
                    url
                }
                categories {
                    name
                    slug
                } 
                content{
                    raw
                }
            }
        }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
}

export const getPressReleaseDetails = async (slug) => {
    const query = gql`
        query GetPressReleaseDetails($slug: String!) {
            pressRelease(where: { slug: $slug }){
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                createdAt
                releaseDate
                releaseYear
                slug
                title
                description
                featuredImage {
                    url
                }
                content{
                    raw
                }
            }
        }
    `

    const result = await request(graphqlAPI, query, { slug });

    return result.pressRelease;
}


export const getRecentPosts = async(slug) => {
    const query = gql`
        query GetPostDetails($slug: String!) {
            posts(
                where: { slug_not: $slug }
                orderBy: releaseDate_ASC
                last: 3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    
    return result.posts.reverse()
}

export const getFeaturedPosts = async() => {
    const query = gql`
        query GetPostDetails() {
            posts(
                where: { featuredPost: true }
                orderBy: createdAt_ASC
                last: 50
            ){
                author {
                    bio
                    name
                    id
                    photo {
                    url
                    }
                }
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);
    
    return result.posts.reverse()
}

export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
        query GetPostDetails($slug: String!, $categories: [String!]) {
            posts(
                where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
                last: 3
            ) {
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query, { categories, slug });
    
    return result.posts.reverse()
}

export const getCategories = async () => {
    const query = gql`
        query getCategories {
            categories {
                name
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);
    
    return result.categories
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
    return result.json();
}

export const getComments = async ( slug ) => {
    const query = gql`
        query GetComments( $slug: String! ) {
            comments(where: { post: { slug: $slug } } ) {
                name
                createdAt
                comment
            }
        }
    `
    const result = await request(graphqlAPI, query, { slug });
    
    return result.comments
}

export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              description
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges.reverse();
  };

{/*
export const getInsightlyUser = async (obj) => {
    const result = await fetch(`/api/insightlyNewsletter`, {
        method: 'GET',

        headers: {
            'Content-Type': 'application/json',
            "Authorization" : "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg=="
        },
        body: JSON.stringify(obj)
    })

    axios({
        method: "GET",
        url:"https://api.na1.insightly.com/v3.1/Contacts/Search?EMAIL_ADDRESS=jeff.meisner@sector5digital.com",
        //withCredentials: true,
        headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true,
            'Authorization': "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg==",
          },
        })
        .then((response) => {
            console.log('working', response)
        }).catch((error) => {
            if (error.response) {
                console.log('error', error.response)
            }
        })

    return result.json();
}

export const updateInsightlyUser = async (obj) => {
    const result = await fetch('https://api.na1.insightly.com/v3.1/Contacts', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg=="
        },
        body: JSON.stringify(obj)
    })
    return result.json();
}

export const addInsightlyUser = async (obj) => {
    const result = await fetch('https://api.na1.insightly.com/v3.1/Contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg=="
        },
        body: JSON.stringify(obj)
    })
    return result.json();
}
*/}

