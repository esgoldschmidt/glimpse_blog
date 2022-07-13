/* *************************************************** */
// Any file within pages/api is mapped to /api/* and
// will be treated as an API endpoint instead of a page
/* *************************************************** */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {
    id : '1',
    first : 'Eric',
    email: 'eric@test.com'
  },
  {
    id : '2',
    first : 'Jason',
    email: 'jason@test.com'
  },
  {
    id : '3',
    first : 'Max',
    email: 'max@test.com'
  },
  {
    id : '4',
    first : 'Cameron',
    email: 'cameron@test.com'
  }
]

export default function handler(_req, res) {
  // Get data from your database
  res.status(200).json(users)
}