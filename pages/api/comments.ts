/* *************************************************** */
// Any file within pages/api is mapped to /api/* and
// will be treated as an API endpoint instead of a page
/* *************************************************** */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmsToken = process.env.GRAPHCMS_TOKEN

type Data = {
  name: string
}

export default async function comments(req: any, res: any){
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`
    }
  })

  // mutation in gql is update or change data, such as add a comment
  // connecting name, email and comment to specific post (slug) where comment takes place
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!){
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug }}}) { id }
    }
  `

  try{
    const result = await graphQLClient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}
