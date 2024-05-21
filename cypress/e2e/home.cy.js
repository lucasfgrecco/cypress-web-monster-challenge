import { faker } from "@faker-js/faker";

describe("Home web page test", () => {
	let monster;

	beforeEach(() => {
		cy.visit("/");
		monster = {
			name: faker.animal.crocodilia(),
			hp: faker.number.int({ min: 1, max: 100 }),
			attack: faker.number.int({ min: 1, max: 100 }),
			defense: faker.number.int({ min: 1, max: 100 }),
			speed: faker.number.int({ min: 1, max: 100 }),
		};
	});

	context("When the user enter de home page", () => {
		it("It checks the number of monster is five", () => {
			cy.checkNumberOfMonsters().should("have.length", 5);
		});

		it("it checks the input fields and the button are visible", () => {
			cy.checkInputFieldsAndButtonAreDisplayed().should("be.visible");
		});
		it("it checks the texts are displayed", () => {
			cy.checkTextsFields().should("be.visible");
		});
	});

	context("When the user submit the form...", () => {
		it("it should create a monster", () => {
			cy.createAMonster(monster);
			cy.get('[data-testid="dynamic-title"]').should(
				"have.text",
				"Your Monsters"
			);
			cy.get('[data-testid="card-monster-name"]').should(
				"have.text",
				monster.name
			);
			cy.get('[data-testid="favorite-btn"]').should("be.visible");
			cy.get('[data-testid="monster-image"]').should("be.visible");
			cy.get('[data-testid="card-monster-hp"]').should("be.visible");
			cy.get('[data-testid="card-monster-attack"]').should("be.visible");
			cy.get('[data-testid="card-monster-defense"]').should("be.visible");
			cy.get('[data-testid="card-monster-speed"]').should("be.visible");
			cy.get('[data-testid="btn-delete"]').should("be.visible");
		});
		it("it should delete a monster", () => {
			cy.createAMonster(monster);
			cy.deleteAMonster();
			cy.get('[data-testid="dynamic-title"]').should(
				"have.text",
				"There are no monsters"
			);
		});
		it("it should favorite a monster", () => {
			cy.createAMonster(monster);
			cy.favoriteAMonster().should("have.css", "color", "rgb(255, 0, 0)");
		});

		it("it should check obligatory fields", () => {
			cy.get('[data-testid="btn-create-monster"]').click();
			cy.get('[data-testid="alert-required-fields"]').should(
				"have.text",
				"All fields are required"
			);
		});
		it("it should check a valid number", () => {
			cy.get('[data-testid="monster-name"]').type("teste");
			cy.get('[data-testid="hp-value"]').type(999);
			cy.get('[data-testid="alert-required-fields"]').should(
				"have.text",
				"Please enter a valid number"
			);
		});
	});
});
