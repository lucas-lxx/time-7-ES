import CadastroPage from "../pageObjects/CadastroPage";
import { url } from "./Mock";

const cadastroPage = new CadastroPage;

describe('Cadastro', () => {
    beforeEach(() => {
        cy.visit(url);
    })

    it('#1 Cadastro Valido', () => {
        cadastroPage.cadastroInvalid();
        cadastroPage.checkPageInvalid();
    });

    it('#2 Cadastro Invalido', () => {
        cadastroPage.cadastroValid();
        //cadastroPage.checkPageValid();
    });
    
})