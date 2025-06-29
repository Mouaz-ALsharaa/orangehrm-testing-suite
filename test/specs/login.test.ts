import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import DashboardPage from '../pageobjects/Dashboard.page.js'
import loginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
          await browser.setTimeout({ 'implicit': 2000 })
        await LoginPage.open()

        await LoginPage.login('Admin', 'admin123')
        
         await expect(DashboardPage.Dashboard).toBeExisting()
      await loginPage.logout()
           await expect(loginPage.loginLabel).toBeDisplayed()
    }),

    it('should display error on invalid login', async () => {
        
        await browser.setTimeout({ 'implicit': 2000 })
        await LoginPage.open()

        await LoginPage.login('Admin', 'admin3333')
         
     
         await expect(LoginPage.errorMessage).toBeDisplayed()
      
     
    })
})

