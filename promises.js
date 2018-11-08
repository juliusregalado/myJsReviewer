console.log('promises!!!')
// let myRequest = new XMLHttpRequest();
// myRequest.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=337296859.1677ed0.4035176236904d5e9123667b9ac67650&count=4');
// myRequest.onload = function() {
// 	let data = JSON.parse(myRequest.responseText);
// 	renderData(data.data);
// }
// myRequest.send();
// function renderData(inp) {
// 	let parentDiv = document.getElementById("insta-feed");
// 	inp.forEach(el => {
//         let instaImage = el.images.standard_resolution.url;
//         console.log(el)
//         // parentDiv.insertAdjacentHTML(
//         //     'beforeend', 
//         //     `<div class="col-6 col-md-3"><img src="${instaImage}" class="insta-feed-img"></div>`
//         // )
// 	});
// };
// const promise = new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://api.icndb.com/jokes/random');
//     request.onload = () => {
//       if (request.status === 200) {
//         resolve(request.response); // we got data here, so resolve the Promise
//       } else {
//         reject(Error(request.statusText)); // status is not 200 OK, so reject
//       }
//     };
//     request.onerror = () => {
//       reject(Error('Error fetching data.')); // error occurred, reject the  Promise
//     };
//     request.send(); // send the request
// });
//   console.log('Asynchronous request made.');
//   promise.then((data) => {
//     console.log('Got data! Promise fulfilled.');
//     document.body.textContent = JSON.parse(data).value.joke;
//   }, (error) => {
//     console.log('Promise rejected.');
//     console.log(error.messege);
// });
const instaPromise = new Promise((resolve, reject) => {
    const instaRequest = new XMLHttpRequest();
    instaRequest.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=337296859.1677ed0.4035176236904d5e9123667b9ac67650&count=4');
    instaRequest.onload = () => {
        console.log('fetching istagram feed');
        if(instaRequest.status === 200) {
            resolve(instaRequest.response)
        } else {
            reject(Error('error during fetching data'))
        }                
    }
    instaRequest.send();
});
instaPromise.then((data) => {
    console.log('instagram feed fetched');
    let parsedData = JSON.parse(data);
    console.log(parsedData)
}, (error) => {
    console.log('Promise rejected');
    console.log(error.message);
});