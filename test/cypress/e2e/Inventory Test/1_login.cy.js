import { url } from "./Mock";
import LoginPage from "../pageObjects/LoginPage"

const loginPage = new LoginPage;

describe('Login', () => {
    beforeEach(() => {
        cy.visit(url);
    })

    it('#1 Login Invalido', () => {
        loginPage.loginInvalid();
        loginPage.checkPageInvalid();
    });

    it('#2 Login Valido', () => {
        loginPage.loginValid();
        loginPage.checkPageValid();
    });
    
})