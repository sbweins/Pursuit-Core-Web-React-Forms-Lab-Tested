describe("feature one", () => {
  it("visits the page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("passes this test", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Edit src/App.js and save to reload.");
  });
});
