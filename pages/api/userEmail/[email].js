import { checkUser } from '../../../lib/check-user';

export default async function userHandler(req,res) {
  const {
    query: { email },
    method,
  } = req

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

  switch (method) {
    case 'GET':
        const userID = await checkUser( email )
        // Update or create data in your database
        console.log('id', userID)
        res.status(200).json({ userID })

        break
    default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
  }
}