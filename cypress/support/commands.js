Cypress.Commands.add('login', (email, password) => {
    cy.contains("Log in").click();
    if (email) {
        cy.get("#mail").type(email);
    }
    if (password) {
        cy.get("#pass").type(password);
    }
    cy.contains("Submit").click();
});

Cypress.Commands.add('book', (title, description, authors) => {
    cy.contains("Add new").click();
    if (title) {
        cy.get("#title").type(title);
    }
    if (description) {
        cy.get("#description").type(description);
    }
    if (authors) {
        cy.get("#authors").type(authors);
    }
    cy.contains("Submit").click();
});

Cypress.Commands.add("bookFav", (title, description, authors) => {
    cy.contains("Books list").click();
    cy.contains("Add new").click();
    if (title) {
        cy.get("#title").type(title);
    }
    if (description) {
        cy.get("#description").type(description);
    }
    if (authors) {
        cy.get("#authors").type(authors);
    }
    cy.get("#favorite").click();
    cy.contains("Submit").click();
  });

Cypress.Commands.add("bookFavDelete", (title) => {
    cy.contains(title).contains("Delete from favorite").click();
  });

