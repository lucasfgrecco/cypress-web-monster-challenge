Cypress.Commands.add("checkNumberOfMonsters", () => {
	cy.get('[data-testid="monsters-list-section"]').find(
		'[data-testid^="monster-"]'
	);
});
Cypress.Commands.add("checkInputFieldsAndButtonAreDisplayed", () => {
	const attributes = [
		'[data-testid="hp-value"]',
		'[data-testid="monster-name"]',
		'[data-testid="attack-value"]',
		'[data-testid="defense-value"]',
		'[data-testid="speed-value"]',
		'[data-testid="btn-create-monster"]',
	];

	attributes.forEach((selector) => {
		cy.get(selector);
	});
});

Cypress.Commands.add("checkTextsFields", () => {
	const attributes = [
		'[data-testid="app-name"]',
		'[data-testid="monster-list-title"]',
		'[data-testid="dynamic-title"]',
	];

	attributes.forEach((selector) => {
		cy.get(selector);
	});
});

Cypress.Commands.add("createAMonster", (monster) => {
	cy.get('[data-testid="monsters-list-section"] [data-testid^="monster-"]')
		.eq(Math.floor(Math.random() * 5))
		.click();
	cy.get('[data-testid="monster-name"]').type(monster.name);
	cy.get('[data-testid="hp-value"]').type(monster.speed);
	cy.get('[data-testid="attack-value"]').type(monster.attack);
	cy.get('[data-testid="defense-value"]').type(monster.defense);
	cy.get('[data-testid="speed-value"]').type(monster.hp);
	cy.get('[data-testid="btn-create-monster"]').click();
});

Cypress.Commands.add("deleteAMonster", () => {
	cy.get('[data-testid="btn-delete"]').click();
});
Cypress.Commands.add("favoriteAMonster", () => {
	cy.get('[data-testid="favorite-btn"]').click();
});
