import CadastroPage from "../pageObjects/CadastroPage";
import { url } from "./Mock";

const cadastroPage = new CadastroPage;

describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit(url);
    })

    it('#1 Must make invalid registration', () => {
        cadastroPage.cadastroInvalid();
        cadastroPage.checkPageInvalid();
    });

    it('#2 Must make valid registration', () => {
        cadastroPage.cadastroValid();
        //cadastroPage.checkPageValid();
    });
    
})