function makeHttprequest(method, url){
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        
    })
}
makeHttprequest('GET','https://dummyjson.com/users')