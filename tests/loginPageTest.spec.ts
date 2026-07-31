import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'

// first we will validate everything with hardcoded value: 
const url= 'https://rahulshettyacademy.com/client/#/auth/login'
let email = 'testnHNk@gmail.com'
let passsword= 'Testing@1234'
let errorMessage = 'Incorrect email or password'
let invalidPassword = 'testing'

let lp : LoginPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchUrl(url)

})

test('Login using valid details', async ({page}) =>{
    // const lp = new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(email,passsword)
    await expect(lp.homePageIdentifier).toBeVisible()

})

test('invalid login', async ({page}) =>{
//    const lp = new LoginPage(page)
//    await lp.launchUrl(url)
   await lp.loginIntoApplication(email,invalidPassword)
   await expect(lp.errorMessage).toBeVisible()

})

