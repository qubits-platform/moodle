@mod @mod_qbassign @javascript
Feature: Check that the qbassignment grade can be rescaled when the max grade is changed
  In order to ensure that the percentages are not affected by changes to the max grade
  As a teacher
  I need to rescale all grades when updating the max grade

  Background:
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 1 |
    And the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Teacher | 1 | teacher1@example.com |
      | student1 | Student | 1 | student10@example.com |
      | student2 | Student | 2 | student10@example.com |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student1 | C1 | student |
      | student2 | C1 | student |
    And the following "groups" exist:
      | name | course | idnumber |
      | Group 1 | C1 | G1 |
    And the following "activity" exists:
      | activity         | qbassign                      |
      | course           | C1                          |
      | name             | Test qbassignment name        |
      | submissiondrafts | 0                           |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I click on "Grade" "link" in the "Student 1" "table_row"
    And I set the field "Grade out of 100" to "40"
    And I press "Save changes"
    And I follow "View all submissions"
    And "Student 1" row "Grade" column of "generaltable" table should contain "40.00"
    And I am on the "Test qbassignment name" "qbassign activity" page

  Scenario: Update the max grade for an qbassignment without rescaling existing grades
    Given I navigate to "Settings" in current page administration
    And I expand all fieldsets
    And I set the field "Rescale existing grades" to "No"
    And I set the field "Maximum grade" to "80"
    When I press "Save and display"
    And I follow "View all submissions"
    Then "Student 1" row "Grade" column of "generaltable" table should contain "40.00"

  Scenario: Update an qbassignment without touching the max grades
    Given I navigate to "Settings" in current page administration
    And I expand all fieldsets
    And I set the field "Rescale existing grades" to "No"
    And I set the field "Maximum grade" to "80"
    And I press "Save and display"
    And I navigate to "Settings" in current page administration
    And I press "Save and display"
    And I navigate to "Settings" in current page administration
    And I expand all fieldsets
    And I set the field "Rescale existing grades" to "Yes"
    And I set the field "Maximum grade" to "80"
    When I press "Save and display"
    And I follow "View all submissions"
    Then "Student 1" row "Grade" column of "generaltable" table should contain "40.00"

  Scenario: Update the max grade for an qbassignment rescaling existing grades
    Given I navigate to "Settings" in current page administration
    And I expand all fieldsets
    And I set the field "Rescale existing grades" to "Yes"
    And I set the field "Maximum grade" to "50"
    When I press "Save and display"
    And I follow "View all submissions"
    Then "Student 1" row "Grade" column of "generaltable" table should contain "20.00"

  Scenario: Rescaling should not produce negative grades
    Given I follow "View all submissions"
    And I click on "Grade" "link" in the "Student 2" "table_row"
    And I wait until the page is ready
    And I am on the "Test qbassignment name" "qbassign activity" page
    And I navigate to "Settings" in current page administration
    And I expand all fieldsets
    And I set the field "Rescale existing grades" to "Yes"
    And I set the field "Maximum grade" to "50"
    When I press "Save and display"
    And I follow "View all submissions"
    # Make sure the student did not receive a negative grade.
    Then "Student 2" row "Grade" column of "generaltable" table should not contain "-0.50"
