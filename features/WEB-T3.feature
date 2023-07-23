Feature: Test Case - Navigate to sell Price
    @TestCaseKey=WEB-T3
    Scenario Outline: Test Case - Navigate to sell Price
        
        Given Go to login Page
        When Enter the <UserName> and <Password>
        Then User Login successfully
        Then Click on Price 
        And Click on Sell Price
        Then Click on Create
        
        Examples:
        |UserName|Password     |
        |guest1  |guest1674821 |