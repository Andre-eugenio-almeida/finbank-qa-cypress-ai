describe('Dashboard - FinBank', () => {

    it('CT-008 - deve acessar o dashboard após login válido', () => {

        cy.visit('http://localhost:3000');

        cy.get('#cpf')
            .type('12345678900');

        cy.get('#senha')
            .type('FinBank@123');

        cy.get('button[type="submit"]')
            .click();

        cy.get('#mensagem')
            .should('be.visible')
            .and('contain', 'Login realizado com sucesso');

        cy.window().then((win) => {
            win.sessionStorage.setItem('usuario', 'Cliente FinBank');
        });

        cy.visit('http://localhost:3000/dashboard.html');

        cy.contains('h2', 'Bem-vindo ao FinBank')
            .should('be.visible');

        cy.get('#usuario')
            .should('be.visible')
            .and('contain', 'Olá, Cliente FinBank!');
    });


    it('CT-009 - deve realizar logout do dashboard', () => {

        cy.visit('http://localhost:3000/dashboard.html', {
            onBeforeLoad(win) {
                win.sessionStorage.setItem('usuario', 'Cliente FinBank');
            }
        });

        cy.get('#logout')
            .should('be.visible')
            .click();

        cy.url()
            .should('eq', 'http://localhost:3000/');

        cy.get('#cpf')
            .should('be.visible');
    });


    it('CT-010 - não deve permitir acesso ao dashboard sem autenticação', () => {

        cy.visit('http://localhost:3000/dashboard.html');

        cy.url()
            .should('eq', 'http://localhost:3000/');

        cy.get('#cpf')
            .should('be.visible');
    });


    it('CT-011 - deve exibir o nome do usuário autenticado', () => {

        cy.visit('http://localhost:3000/dashboard.html', {
            onBeforeLoad(win) {
                win.sessionStorage.setItem('usuario', 'Cliente FinBank');
            }
        });

        cy.get('#usuario')
            .should('be.visible')
            .and('contain', 'Olá, Cliente FinBank!');
    });


    it('CT-012 - deve realizar uma transferência com sucesso', () => {

        cy.visit('http://localhost:3000/dashboard.html', {
            onBeforeLoad(win) {
                win.sessionStorage.setItem('usuario', 'Cliente FinBank');
            }
        });

        cy.get('#destinatario')
            .should('be.visible')
            .clear()
            .type('98765432100');

        cy.get('#valor')
            .should('be.visible')
            .clear()
            .type('123');

        cy.get('#transferir')
            .should('be.visible')
            .click();

        cy.get('#mensagem-transferencia')
            .should('be.visible')
            .and('contain', 'Transferência realizada com sucesso');
    });


    it('CT-013 - não deve permitir transferência sem CPF do destinatário', () => {

        cy.visit('http://localhost:3000/dashboard.html', {
            onBeforeLoad(win) {
                win.sessionStorage.setItem('usuario', 'Cliente FinBank');
            }
        });

        cy.get('#valor')
            .should('be.visible')
            .type('123');

        cy.get('#transferir')
            .click();

        cy.get('#mensagem-transferencia')
            .should('be.visible')
            .and('contain', 'CPF do destinatário é obrigatório');
    });


    it('CT-014 - não deve permitir transferência sem valor', () => {

        cy.visit('http://localhost:3000/dashboard.html', {
            onBeforeLoad(win) {
                win.sessionStorage.setItem('usuario', 'Cliente FinBank');
            }
        });

        cy.get('#destinatario')
            .should('be.visible')
            .type('98765432100');

        cy.get('#transferir')
            .click();

        cy.get('#mensagem-transferencia')
            .should('be.visible')
            .and('contain', 'Informe um valor válido');
    });


    it('CT-015 - não deve permitir transferência com valor zero', () => {

        cy.visit('http://localhost:3000/dashboard.html', {
            onBeforeLoad(win) {
                win.sessionStorage.setItem('usuario', 'Cliente FinBank');
            }
        });

        cy.get('#destinatario')
            .should('be.visible')
            .type('98765432100');

        cy.get('#valor')
            .should('be.visible')
            .type('0');

        cy.get('#transferir')
            .click();

        cy.get('#mensagem-transferencia')
            .should('be.visible')
            .and('contain', 'Informe um valor válido');
    });


    it('CT-016 - não deve permitir transferência com valor negativo', () => {

        cy.visit('http://localhost:3000/dashboard.html', {
            onBeforeLoad(win) {
                win.sessionStorage.setItem('usuario', 'Cliente FinBank');
            }
        });

        cy.get('#destinatario')
            .should('be.visible')
            .type('98765432100');

        cy.get('#valor')
            .should('be.visible')
            .type('-100');

        cy.get('#transferir')
            .click();

        cy.get('#mensagem-transferencia')
            .should('be.visible')
            .and('contain', 'Informe um valor válido');
    });
    

});
