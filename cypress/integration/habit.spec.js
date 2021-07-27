/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("open modal when add button is clicked", () => {
    cy.contains("button", "Add").click();
    cy.contains("Add a new habit").should("be.visible");
  });

  it("should display Habit card when new Habit is added", () => {
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("My First Test");
    cy.contains("Save Changes").click();
    cy.contains("My First Test")
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container");
  });
});
