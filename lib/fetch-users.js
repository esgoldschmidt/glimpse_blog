export async function loadUsers() {
    // Call an external API endpoint to get posts
    const res = await fetch(
        `https://api.na1.insightly.com/v3.1/Contacts?brief=true&count_total=true`,
        { method: "GET",
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true,
            'Authorization': "Basic NjZmNzkxZWQtZjVkYS00YzE5LTgxODctNzExNTAzYTdjNjFkOg==",
          }
        })
    const data = await res.json()
  
    return data
  }