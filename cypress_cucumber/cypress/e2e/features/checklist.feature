Feature: Check List
    There is a list of checks made up of three elements
    and there is many rules. 
    1. If 'Todos' is checked, everyone is checked.
    2. If 'Todos' is checked, and after unchecked one of others elements, 
    then 'Todos' change to not checked.
    3. If 'Todos' is not checked, and checked the others, 'Todos'
    change to checked.
    Background: 
        When I visit cypag
    
    Scenario: First rule
        Given 'Todos' is checked
        Then Everyone is checked
    Scenario: Second rule
        Given 'Todos' is checked and others is unchecked
        Then 'Todos' change to not checked
    Scenario: Third rule
        Given 'Todos' is not checked, and checked the others
        Then 'Todos' change to checked

