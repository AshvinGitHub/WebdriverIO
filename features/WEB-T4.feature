Feature: test case -champ login
    @TestCaseKey=WEB-T4
    Scenario Outline: test case -champ login
        
        Given I am on the login page
            When I login with <username> and <password>
            Then I should see a flash message saying <message>
        
            Examples:
              | username | password             | message                        |
              | tomsmith | SuperSecretPassword! | You logged into a secure area! |
              | foobar   | barfoo               | Your username is invalid!      |