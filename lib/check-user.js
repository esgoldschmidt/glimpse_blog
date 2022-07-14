export async function checkUser(email) {
    // Call an external API endpoint to get posts

    // working! DO NOT TOUCH
    const res = await fetch(`https://api.na1.insightly.com/v3.1/Contacts/Search?field_name=EMAIL_ADDRESS&field_value=${email}&brief=true&top=1&count_total=false`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg==",
        }
    })
        
    const data = await res.json()
    //console.log('check', data[0].CONTACT_ID)
    let response;
    if (data.length > 0) {
        response = data[0].CONTACT_ID
    } else {
        response = []
    }
    return response
  }