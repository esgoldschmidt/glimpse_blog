import { addUser } from '../../../lib/add-user';
import { updateUser } from '../../../lib/update-user';

export default async function userHandler(req,res) {
  const {
    method,
    body
  } = req

  switch (method) {
    case 'PUT':
        await updateUser(body.id, body.first, body.email)
        // Update or create data in your database
        await res.status(200).json({ reply: 'success' })
        break
    default:
        res.setHeader('Allow', ['PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
  }
}