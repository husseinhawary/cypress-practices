Feature: End to end ecommerce validation

    Application Regression

    @Regression
    Scenario: Ecommerce products delivery
        Given I open ecommerce page
        When I add items to cart
        And Validate the total prices
        Then Select the country submit and validate Thankyou

    @Smoke
    Scenario: Filling the form to shop
        Given I open ecommerce page
        When I fill the form details
            | name | gender |
            | bobz | Male   |
        Then Validate the form behavior
        And Select the shop page