describe('Тестирование входа в библиотеку', () => {
    beforeEach( () => {
        cy.visit('/');
    });

    it ('Тест на логин', () => {
        cy.login("bropet@mail.ru", "123");
        cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible", true);        
    });

    it ('Тест на ввод пустого пароля', () => {
        cy.login("bropet@mail.ru", null);
        cy.get("#pass").then((elements) => {
            expect(elements[0].checkValidity()).to.be.false;
            expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
        });
    });

    it ('Тест на ввод пустого email', () => {
        cy.login(null, "123");
        cy.get("#mail").then((elements) => {
            expect(elements[0].checkValidity()).to.be.false;
            expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
        });
    });
});

describe('Тестирование библиотеки', () => {
    beforeEach( () => {
        cy.visit('/');
        cy.login("bropet@mail.ru", "123");
    });

    it ('Добавление книги', () => {
        cy.book("Гарри Поттер и философский камень", "Роман","Дж.К. Роулинг");
        cy.contains("Гарри Поттер и философский камень").should("be.visible");
    });

    it ('Добавление книги в избранное', () => {
        cy.bookFav("Гарри Поттер и Тайная комната", "Роман","Дж.К. Роулинг");
        cy.contains("Гарри Поттер и Тайная комната").should("be.visible"); 
    });

    it ("Удаление книги из избранного", () => {
        cy.bookFav("Гарри Поттер и Кубок огня", "Роман","Дж.К. Роулинг");
        cy.get("h4").click();
        cy.bookFavDelete("Гарри Поттер и Кубок огня");
        cy.contains("Гарри Поттер и Кубок огня").should("not.exist");
    });
});
