describe('Login - FinBank', () => {

    it('CT-001 - deve realizar login com credenciais válidas', () => {

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

    });


    it('CT-002 - não deve realizar login com senha inválida', () => {

        cy.visit('http://localhost:3000');

        cy.get('#cpf')
            .type('12345678900');

        cy.get('#senha')
            .type('SenhaErrada123');

        cy.get('button[type="submit"]')
            .click();

        cy.get('#mensagem')
            .should('be.visible')
            .and('contain', 'CPF ou senha inválidos');

    });

});

it('CT-003 - não deve realizar login com CPF inválido', () => {

    cy.visit('http://localhost:3000');

    cy.get('#cpf')
        .type('11111111111');

    cy.get('#senha')
        .type('FinBank@123');

    cy.get('button[type="submit"]')
        .click();

    cy.get('#mensagem')
        .should('be.visible')
        .and('contain', 'CPF ou senha inválidos');

});


it('CT-004 - deve impedir login sem informar CPF', () => {

    cy.visit('http://localhost:3000');

    cy.get('#senha')
        .type('FinBank@123');

    cy.get('button[type="submit"]')
        .click();

    cy.get('#mensagem')
        .should('be.visible')
        .and('contain', 'CPF é obrigatório');

});

it('CT-005 - deve impedir login sem informar senha', () => {

    cy.visit('http://localhost:3000');

    cy.get('#cpf')
        .type('98765432100');

    cy.get('button[type="submit"]')
        .click();

    cy.get('#mensagem')
        .should('be.visible')
        .and('contain', 'Senha é obrigatória');

});

it('CT-006 - deve impedir login sem informar CPF e senha', () => {

    cy.visit('http://localhost:3000');

    cy.get('button[type="submit"]')
        .click();

    cy.get('#mensagem')
        .should('be.visible')
        .and('contain', 'CPF e senha são obrigatórios');

});

it('CT-007 - deve bloquear login após múltiplas tentativas inválidas', () => {

    cy.visit('http://localhost:3000');

    for (let tentativa = 1; tentativa <= 5; tentativa++) {

        cy.get('#cpf')
            .clear()
            .type('98765432100');

        cy.get('#senha')
            .clear()
            .type('SenhaErrada123');

        cy.get('button[type="submit"]')
            .click();

        if (tentativa < 5) {
            cy.get('#mensagem')
                .should('be.visible')
                .and('contain', 'CPF ou senha inválidos');
        }
    }

    cy.get('#mensagem')
        .should('be.visible')
        .and('contain', 'Conta bloqueada');
});