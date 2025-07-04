import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('input[name="username"]');
    }

    public get inputPassword () {
        return $('input[name="password"]');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }
    public get errorMessage() {
    return $('//i[@class="oxd-icon bi-exclamation-circle oxd-alert-content-icon"]');
}
public get userDropDown(){
    return $('//li[@class="oxd-userdropdown"]')
}
public get logoutButton (){
    return $('//a[normalize-space()="Logout"]')
}

public get loginLabel(){
    return $('h5=Login')
}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async logout(){
        await this.userDropDown.click();
        await this.logoutButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('auth/login');
    }
}

export default new LoginPage();
