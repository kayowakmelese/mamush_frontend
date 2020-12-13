

async function fetchData(urlocation,value){
    urlocation="http://192.168.1.4:300/api/user/"+urlocation;
    const resp= await fetch(urlocation,{
        method:'POST',
        body:value,
        headers:new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJleW9iYSIsImxhc3RuYW1lIjoid2VuZG1lbmVoIiwiaWQiOjIsImlhdCI6MTYwNzE4MDE1NX0.vCqZCndVzMfHH1MB4S8xfE0J3V_vlX4iRNYOBBL_zyU"})
    })
    const response=await resp.json();
    return response;

}
export default fetchData;