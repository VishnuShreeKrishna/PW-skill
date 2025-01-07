function makeHttprequest(method, url,callback){
    const xhr = new XMLHttpRequest()
    // xhr.responseType = 'json'
    console.log(xhr.responseType)
}
makeHttprequest('GET','https://dummyjson.com/users')