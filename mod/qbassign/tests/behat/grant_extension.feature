@mod @mod_qbassign
Feature: Grant an extension to an offline student
  In order to allow students to have an accurate due date
  As a teacher
  I need to grant students extensions at any time

  Background:
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 1 |
    And the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Teacher | 1 | teacher1@example.com |
      | student1 | Student | 1 | student1@example.com |
      | student2 | Student | 2 | student2@example.com |
      | student3 | Student | 3 | student3@example.com |
      | student4 | Student | 4 | student4@example.com |
      | student5 | Student | 5 | student5@example.com |
      | student6 | Student | 6 | student6@example.com |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student1 | C1 | student |
      | student2 | C1 | student |
      | student3 | C1 | student |
      | student4 | C1 | student |
      | student5 | C1 | student |
      | student6 | C1 | student |

  @javascript
  Scenario: Granting an extension to an offline qbassignment
    Given the following "activities" exist:
      | activity | course | name                 | intro                       | qbassignsubmission_onlinetex_enabled | qbassignsubmission_file_enabled | duedate    |
      | qbassign   | C1     | Test qbassignment name | Test qbassignment description | 0                                   | 0                             | 1388534400 |
    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    And I open the action menu in "Student 1" "table_row"
    And I follow "Grant extension"
    And I should see "Student 1 (student1@example.com)"
    And I set the field "Enable" to "1"
    And I press "Save changes"
    Then I should see "Extension granted until:" in the "Student 1" "table_row"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I should see "Extension due date"

  @javascript @_alert
  Scenario: Granting extensions to an offline qbassignment (batch action)
    Given the following "activities" exist:
      | activity | course | name                 | intro                       | qbassignsubmission_onlinetex_enabled | qbassignsubmission_file_enabled | duedate    |
      | qbassign   | C1     | Test qbassignment name | Test qbassignment description | 0                                   | 0                             | 1388534400 |
    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    And I set the field "selectall" to "1"
    And I set the field "operation" to "Grant extension"
    And I click on "Go" "button" confirming the dialogue
    And I should see "Student 1 (student1@example.com)"
    And I should see "Student 2 (student2@example.com)"
    And I should see "Student 3 (student3@example.com)"
    And I should see "Student 4 (student4@example.com)"
    And I should see "Student 5 (student5@example.com)"
    And I should see "1 more..."
    And I set the field "Enable" to "1"
    And I press "Save changes"
    Then I should see "Extension granted until:" in the "Student 1" "table_row"
    And I should see "Extension granted until:" in the "Student 2" "table_row"
    And I should see "Extension granted until:" in the "Student 3" "table_row"
    And I should see "Extension granted until:" in the "Student 4" "table_row"
    And I should see "Extension granted until:" in the "Student 5" "table_row"
    And I should see "Extension granted until:" in the "Student 6" "table_row"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I should see "Extension due date"

  @javascript
  Scenario: Validating that extension date is after due date
    Given the following "activities" exist:
      | activity | course | name                 | intro                       | qbassignsubmission_onlinetex_enabled | qbassignsubmission_file_enabled | allowsubmissionsfromdate    | duedate    |
      | qbassign   | C1     | Test qbassignment name | Test qbassignment description | 0                                   | 0                             | 1388534400                  | 1388620800 |
    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    And I open the action menu in "Student 1" "table_row"
    And I follow "Grant extension"
    And I should see "Student 1 (student1@example.com)"
    And I set the field "Enable" to "1"
    And I set the following fields to these values:
      | extensionduedate[day] | 1 |
    And I press "Save changes"
    Then I should see "Extension date must be after the due date"
    And I set the following fields to these values:
      | extensionduedate[year] | 2013 |
    And I press "Save changes"
    Then I should see "Extension date must be after the allow submissions from date"

  @javascript @_alert
  Scenario: Granting extensions to an offline qbassignment (batch action)
    Given the following "activities" exist:
      | activity | course | name                 | intro                       | qbassignsubmission_onlinetex_enabled | qbassignsubmission_file_enabled | allowsubmissionsfromdate    | duedate    |
      | qbassign   | C1     | Test qbassignment name | Test qbassignment description | 0                                   | 0                             | 1388534400                  | 1388620800 |
    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    And I set the field "selectall" to "1"
    And I set the field "operation" to "Grant extension"
    And I click on "Go" "button" confirming the dialogue
    And I should see "Student 1 (student1@example.com)"
    And I should see "Student 2 (student2@example.com)"
    And I should see "Student 3 (student3@example.com)"
    And I should see "Student 4 (student4@example.com)"
    And I should see "Student 5 (student5@example.com)"
    And I should see "1 more..."
    And I set the field "Enable" to "1"
    And I set the following fields to these values:
      | extensionduedate[day] | 1 |
    And I press "Save changes"
    Then I should see "Extension date must be after the due date"
    And I set the following fields to these values:
      | extensionduedate[year] | 2013 |
    And I press "Save changes"
    Then I should see "Extension date must be after the allow submissions from date"
