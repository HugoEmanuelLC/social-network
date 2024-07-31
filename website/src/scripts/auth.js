
export function login(params) {
    let response = fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('token', JSON.stringify(data), {expires: 1}, {secure: true}, {sameSite: 'none'})
        return data.message
    })
    .catch(err => {
        console.error(err)
        return "La connexion a échoué"
    })
    return response
}

export function register(params) {
    fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(res => console.log(res.json()))
    .catch(err => {
        console.error(err)
    })
}

export function logout() {
    localStorage.removeItem('token')
}

export function checkAuth () {
    console.log("token ", JSON.parse(localStorage.getItem('token')));

    let datas = fetch('http://localhost:3001/api/secret', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
    .then((res) => res.json())
    .then((datas)=>datas)
    .catch(err => console.log("err ", err))

    return datas
}