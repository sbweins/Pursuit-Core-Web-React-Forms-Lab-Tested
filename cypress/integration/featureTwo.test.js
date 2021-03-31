describe("feature two", () => {
  it("has an image", () => {
    cy.visit("http://localhost:3000/");
    cy.get("img").should("be.visible");
  });
});
