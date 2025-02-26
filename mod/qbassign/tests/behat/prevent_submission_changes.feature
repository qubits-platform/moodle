@mod @mod_qbassign
Feature: Prevent or allow qbassignment submission changes
  In order to control when a student can change his/her submission
  As a teacher
  I need to prevent or allow student submission at any time

  Background:
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 1 |
    And the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Teacher | 1 | teacher1@example.com |
      | student1 | Student | 1 | student1@example.com |
      | student2 | Student | 2 | student2@example.com |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student1 | C1 | student |
      | student2 | C1 | student |

  @javascript
  Scenario: Preventing changes and allowing them again
    Given the following "activity" exists:
      | activity                                      | qbassign                  |
      | course                                        | C1                      |
      | name                                          | Test qbassignment name    |
      | intro                                         | Submit your online text |
      | submissiondrafts                              | 0                       |
      | qbassignsubmission_onlinetex_enabled           | 1                       |
      | qbassignsubmission_file_enabled                 | 0                       |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                  |
      | Test qbassignment name  | student1  | I'm the student submission  |

    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I press "Edit submission"
    And I set the following fields to these values:
      | Online text | I'm the student submission and he/she edited me |
    And I press "Save changes"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    And I open the action menu in "Student 1" "table_row"
    And I follow "Prevent submission changes"
    Then I should see "Submission changes not allowed"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student1
    And "Edit submission" "button" should not exist
    And I should see "This qbassignment is not accepting submissions"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I open the action menu in "Student 1" "table_row"
    And I follow "Allow submission changes"
    And I should not see "Submission changes not allowed"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I should not see "This qbassignment is not accepting submissions"
    And I press "Edit submission"
    And I set the following fields to these values:
      | Online text | I'm the student submission edited again |
    And I press "Save changes"
    And I should see "I'm the student submission edited again"

  @javascript @_alert
  Scenario: Preventing changes and allowing them again (batch action)
    Given the following "activities" exist:
      | activity | course | name                 | intro                       | qbassignsubmission_onlinetex_enabled | qbassignsubmission_file_enabled |
      | qbassign   | C1     | Test qbassignment name | Test qbassignment description | 1                                   | 0                             |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                  |
      | Test qbassignment name  | student1  | I'm the student submission  |
      | Test qbassignment name  | student2  | I'm the student2 submission  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    And I set the field "selectall" to "1"
    And I click on "Go" "button" confirming the dialogue
    Then I should see "Submission changes not allowed" in the "Student 1" "table_row"
    And I should see "Submission changes not allowed" in the "Student 2" "table_row"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student2
    And I should not see "Edit submission"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I set the field "selectall" to "1"
    And I set the field "id_operation" to "Unlock submissions"
    And I click on "Go" "button" confirming the dialogue
    And I should not see "Submission changes not allowed" in the "Student 1" "table_row"
    And I should not see "Submission changes not allowed" in the "Student 2" "table_row"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student2
    And I press "Edit submission"
    And I set the following fields to these values:
      | Online text | I'm the student2 submission and he/she edited me |
    And I press "Save changes"
