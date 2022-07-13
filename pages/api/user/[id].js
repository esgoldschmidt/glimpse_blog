import axios from 'axios';

export default function userHandler(req,res) {
  const {
    query: { id, first, email },
    method,
  } = req

  console.log('email', email)
  console.log('id', id)

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
      // Get data from your database
      fetch(
          "https://api.na1.insightly.com/v3.1/Contacts/Search?field_name=EMAIL_ADDRESS&field_value=egoldschmidt%40glimpsegroup.io&brief=true&top=1&count_total=false",
          { method: "GET",
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Credentials': true,
              'Authorization': "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg==",
            }
          }
        ).then(response => response.json())
        .then(data => console.log(data));
        //res.status(200).json({ status: data })
        
      {/*
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
      }).then((response) => {
          alert('working', response)
          res.status(200).json({ status: 'working' })
      }).catch((error) => {
          if (error.response) {
              alert('error', error.response)
              res.status(200).json({ status: 'error' })
          }
      })
    */}
      // res.status(200).json({ id, first: first })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, first: first || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}