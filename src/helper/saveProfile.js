

const saveProfile=(data)=>{
    const { token, name, email,profilePic } = data
    setLocalStorage('token', token)
    setLocalStorage('name', name)
    setLocalStorage('email', email)
    setLocalStorage('profilePic', profilePic)
    
}