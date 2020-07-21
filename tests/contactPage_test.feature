Feature: contact page

Scenario Outline:  Submit and verify contact data
   Given I visit bluescape contact Page
   When I enter my Name as "<name>"
   And I enter my email as "<email>"
   And I select Todays date
   And I enter my website as "<website>"
   And I submit my contact data
   Then I should see my Name as "<name>" on confirmation Page
   And I should see my email as "<email>" on confirmation Page
   And I should see my website as "<website>" on confirmation Page
   And I should see Todays date on confirmation Page

   Examples:
   |name |email| website|
   |John Doe|johndoe@jdoe.net|https://www.codecept.io|

