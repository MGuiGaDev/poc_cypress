Feature: Radio List
    There is a list of radiobuttons made up of three elements 
    that is characterized in that we can only select one of them.

    Background: 
        When I visit cypage

    Scenario: Radio Features
        Then I should see three radiobuttons
        * Everyone is called 'radio'
    
    Scenario: Radio Selected
        Given One of them selected 
        Then the others are not selected