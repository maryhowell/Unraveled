# Component Hierarchy

**HeaderContainer**

* Header

**HomeContainer**

* Masthead
  * SearchBarContainer
* PatternsContainer

**PatternsContainer**

* Patterns
  * Pattern

**PatternContainer**

* Pattern
  * AddToCartContainer
* Reviews
  * Review

**CartContainer**

* Patterns
  * Pattern
* MakeAPurchaseContainer

**PurchasesContainer**

* Patterns
  * Pattern
    * SubmitReviewContainer

## Routes

| path                    | component               |
|:------------------------|:-----------------------:|
| "/"                     | "HeaderContainer"       |
| "/home"                 | "HomeContainer"         |
| "/patterns"                | "PatternsContainer"        |
| "/patterns/:category       | "PatternsContainer"        |
| "/patterns/:id"            | "PatternContainer"         |   
| "/cart"                 | "CartContainer"         |
| "/purchases"            | "PurchasesContainer"    |
