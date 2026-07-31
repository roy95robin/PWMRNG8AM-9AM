// This is login page having all the methods and locators: 

import { Locator, Page } from '@playwright/test'

export class LoginPage {

    // class consisit of properties _ nothing but locators and methods: 
    page:Page // page variable - means this class will use browser page to interact
    email: Locator
    password: Locator
    loginBtn:Locator
    errorMessage:Locator
    homePageIdentifier:Locator
// export - share or reuse the code between any class, files
    // create a constructor()
// All your locator must be present inside the constructor
    constructor(page:Page){
        this.page= page
        this.email = this.page.getByPlaceholder('email@example.com')
        this.password= this.page.getByPlaceholder('enter your passsword')
        this.loginBtn=this.page.locator('#login')
        this.errorMessage=this.page.locator("#toast-container")
        this.homePageIdentifier= this.page.locator("[routerlink='/dashboard/']")

    }
    // create the command reusable methods: 

    // navigate to url: 
    async launchUrl(url:string){
        await this.page.goto(url)
    }

    // provide the username and password: 
    async loginIntoApplication(username: string , password:string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    // async clickButton(button:string){
    //     await this.loginBtn.click()
    // }
    //  async username(username:string){
    //    await this.email.fill(username)
    // }
    //  async passwordCheck(password:string){
    //   await this.password.fill(password)
    // }

}

