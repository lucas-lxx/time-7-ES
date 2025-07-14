import { url } from "./Mock";
import LoginPage from "../pageObjects/LoginPage"

const loginPage = new LoginPage;

describe('Login', () => {
    beforeEach(() => {
        cy.visit(url);
    })

    it('#1 Should log in Invalid', () => {
        loginPage.loginInvalid();
        loginPage.CheckPageInvalid();
    });

    it('#2 Should log in successfully', () => {
        loginPage.loginValid();
        loginPage.CheckPageValid();
    });

    

    
    
})