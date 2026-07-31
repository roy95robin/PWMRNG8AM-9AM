import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import products from '../testdata/product.json'


for(const product of products){

    test.describe(`test check ${product.productName}` , () =>{

          let lp : LoginPage
         let dp:DashboardPage

    test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp= new DashboardPage(page)
    await lp.launchUrl(product.url)
    await lp.loginIntoApplication(product.email,product.passsword)
    await expect(lp.homePageIdentifier).toBeVisible()
    })
        test(`Add item to cart: ${product.productName}`, async() =>{
           await dp.searchProduct(product.productName, 1)
           await expect(dp.addToCartMessage).toContainText(product.successMessage)
        })

         test(`View product details: ${product.productName}`, async() =>{
            await dp.searchProduct(product.productName, 0)
            await expect(dp.viewPageProductName).toBeVisible()
            await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice)
          
        })


    })



}