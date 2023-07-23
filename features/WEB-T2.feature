Feature: Test case - Login into Cargo Site
    @TestCaseKey=WEB-T2
    Scenario Outline: Test case - Login into Cargo Site
        
        Given Go to login Page
        When Enter the <UserName> and <Password>
        Then User Login successfully
        
        Examples:
        |UserName|Password     |
        |guest1  |guest1674821 |