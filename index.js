function makeHttprequest(method, url,callback){
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        callback(xhr.response);
        // console.log(xhr.response.users.length);

        
    })
    xhr.open(method,url)
    xhr.send()
}
makeHttprequest('GET','https://dummyjson.com/users', (userdata) => {
    makeHttprequest('GET', 'https://dummyjson.com/users/${userdata[xhr.response.length]}')
}
// makeHttprequest('GET','https://dummyjson.com/users')
