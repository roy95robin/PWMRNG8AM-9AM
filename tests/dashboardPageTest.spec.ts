import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'

const url= 'https://rahulshettyacademy.com/client/#/auth/login'
let email = 'testnHNk@gmail.com'
let passsword= 'Testing@1234'
let productName = "ADIDAS ORIGINAL"

let lp : LoginPage
let dp:DashboardPage

test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp= new DashboardPage(page)
    await lp.launchUrl(url)
    await lp.loginIntoApplication(email,passsword)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('add item to cart', async()=>{
    await dp.searchProduct(productName, 1)
    await expect(dp.addToCartMessage).toHaveText('Product Added To Cart ')
})

test('view the product', async()=>{
    await dp.searchProduct(productName,0)
    await expect(dp.viewPageProductName).toHaveText(productName)
    
})