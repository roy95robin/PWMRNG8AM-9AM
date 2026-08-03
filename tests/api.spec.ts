// What is API testing: 
/*
API Testing: validating the BE functionality using API calls. (reqeust and response)

Irctc - not limited to booking trains tickets/ 
irctc air -- booking the flights tickets. () 

request url-- 
body-- 
request-
reposne- 
reponse code as well 

*/

import {test, expect} from '@playwright/test';

test('login validation using API', async ({request}) => {

    const loginPayload = {
        userEmail: 'testnHNk@gmail.com',
        userPassword:'Testing@1234'
    };
    const orderPayload={
        orders: [{country: "British Indian Ocean Territory", productOrderedId: "6960ea76c941646b7a8b3dd5"}]
    }

    const LoginResponse = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
       // pass the login details in the body of the request
        data:loginPayload
    })
console.log(LoginResponse);
// above console is to print all the header status and body of the response in the console.
// from the above response , validate the status code. 

// validate the status code of the response
expect(LoginResponse.status()).toBe(200);

// validate the response body of the response
const responseBody=await LoginResponse.json()
console.log(responseBody);

// print the token from the response body
const token = responseBody.token;
console.log('Auth token is :', token);

// validate the token details: 
expect(token).toBeTruthy()
expect(responseBody.message).toBe('Login Successfully');


// create the order using API: 

const orderResponse = await request.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
    data:orderPayload,
    headers:{
        authorization: token,
        contentType: 'application/json'
    }

})

// validate the order creation details: 
expect(orderResponse.ok()).toBeTruthy();
const orderResponseBody = await orderResponse.json();
console.log('response is:', orderResponseBody);


})
