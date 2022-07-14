export async function updateUser(id, first, email) {
    // Call an external API endpoint to update user

    // working! DO NOT TOUCH
    console.log('updating user')
  const res = await fetch("https://api.na1.insightly.com/v3.1/Contacts", {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg==",
        },
        body: JSON.stringify({
            "CONTACT_ID" : id,
            "EMAIL_ADDRESS": email,
            "FIRST_NAME": first,
            "TAGS": [
                {
                  "TAG_NAME": "Subscriber"
                }
            ]
        })
    })
        
    const data = await res
    return data
  }