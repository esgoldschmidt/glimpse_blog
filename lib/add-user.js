export async function addUser(first, email) {
    // Call an external API endpoint to get posts

    // working! DO NOT TOUCH
    const res = await fetch("https://api.na1.insightly.com/v3.1/Contacts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg==",
        },
        body: JSON.stringify({
            "EMAIL_ADDRESS": email,
            "FIRST_NAME": first,
        })
    })
        
    const data = await res
    return data
  }