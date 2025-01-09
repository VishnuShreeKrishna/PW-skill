function makeHttprequest(method, url,callback){
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        callback(xhr.response)
    })
    xhr.open(method,url)
    xhr.send()
}
makeHttprequest('GET','https://dummyjson.com/users', (userdata) => {
    makeHttprequest('GET',`https://dummyjson.com/users/${userdata.users[(userdata.users).length].id}`)
    
})
// makeHttprequest('GET','https://dummyjson.com/users')
