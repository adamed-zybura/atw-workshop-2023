describe("Cart Flow", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Adding to cart from wishlist shoudnt remove item from wishlist", () => {
    //add something to wishlist
    //go to wishlist
    //click on
    //check if item is still in wishlist
    // and has addet to cart text
    cy.log(Cypress.env("defualtFailureRate"));
    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  });

  it("Changing product parameters should change price", () => {
    // add plate to cart
    // in cart
    // add gloss
    // add frame
    // change size
    // change count
    // check if price is correct

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  });

  it("Changing country should change currency", () => {
    //add plate to cart
    //in cart
    // change country to poland
    // price is in euro
    // change country to usa
    // price is in usd

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  });

  it("Add discount should change price", () => {
    //add plate to cart
    //in cart click on discount
    // insert  discount code
    // price is lower

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  });

  it("Remove last plate from cart should redirect to homepage", () => {
    // add plate to cart
    // add difrent plate to cart
    // go to cart
    // remove 1st plate
    // plate remove
    // remove 2nd plate
    // redirect to homepage

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  });

  // trees counter is not checkedm
  //not covered cant sell some products in some countires -example starwars in venezula
});
