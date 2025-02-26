@mod @mod_qbassign
Feature: qbassign reset
  In order to reuse past qbassignss
  As a teacher
  I need to remove all previous data.

  Background:
    Given the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Tina | Teacher1 | teacher1@example.com |
      | student1 | Sam1 | Student1 | student1@example.com |
      | student2 | Sam2 | Student2 | student2@example.com |
    And the following "courses" exist:
      | fullname | shortname | category |
      | Course 1 | C1 | 0 |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student1 | C1 | student |
      | student2 | C1 | student |
    And the following "groups" exist:
      | name    | course | idnumber |
      | Group 1 | C1     | G1       |
      | Group 2 | C1     | G2       |
    And the following "activity" exists:
      | activity                                      | qbassign                  |
      | course                                        | C1                      |
      | name                                          | Test qbassignment name    |
      | intro                                         | Submit your online text |
      | qbassignsubmission_onlinetex_enabled           | 1                       |
      | qbassignsubmission_onlinetex_wordlimit_enabled | 1                       |
      | qbassignsubmission_onlinetex_wordlimit         | 10                      |
      | qbassignsubmission_file_enabled                 | 0                       |
      | submissiondrafts                              | 0                       |

  Scenario: Use course reset to clear all attempt data
    Given the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                       |
      | Test qbassignment name  | student1  | I'm the student first submission |
    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I should see "Submitted for grading"
    And I should see "I'm the student first submission"
    And I should see "Not graded"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I should see "Submitted for grading"
    When I am on the "Course 1" "reset" page
    And I set the following fields to these values:
        | Delete all submissions | 1  |
    And I press "Reset course"
    And I press "Continue"
    And I am on the "Test qbassignment name" Activity page
    And I follow "View all submissions"
    Then I should not see "Submitted for grading"

  @javascript
  Scenario: Use course reset to remove user overrides.
    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I navigate to "Overrides" in current page administration
    And I press "Add user override"
    And I set the following fields to these values:
        | Override user    | Student1  |
        | id_duedate_enabled | 1 |
        | duedate[day]       | 1 |
        | duedate[month]     | January |
        | duedate[year]      | 2020 |
        | duedate[hour]      | 08 |
        | duedate[minute]    | 00 |
    And I press "Save"
    And I should see "Sam1 Student1"
    When I am on the "Course 1" "reset" page
    And I set the following fields to these values:
        | Delete all user overrides | 1  |
    And I press "Reset course"
    And I press "Continue"
    And I am on "Course 1" course homepage
    And I click on "Test qbassignment name" "link" in the "region-main" "region"
    And I navigate to "Overrides" in current page administration
    Then I should not see "Sam1 Student1"

  Scenario: Use course reset to remove group overrides.
    When I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I navigate to "Overrides" in current page administration
    And I select "Group overrides" from the "jump" singleselect
    And I press "Add group override"
    And I set the following fields to these values:
        | Override group   | Group 1  |
        | id_duedate_enabled | 1 |
        | duedate[day]       | 1 |
        | duedate[month]     | January |
        | duedate[year]      | 2020 |
        | duedate[hour]      | 08 |
        | duedate[minute]    | 00 |
    And I press "Save"
    And I should see "Group 1"
    And I am on the "Course 1" "reset" page
    And I set the following fields to these values:
        | Delete all group overrides | 1  |
    And I press "Reset course"
    And I press "Continue"
    And I am on the "Test qbassignment name" Activity page
    And I navigate to "Overrides" in current page administration
    And I select "Group overrides" from the "jump" singleselect
    Then I should not see "Group 1"

  Scenario: Use course reset to reset blind marking qbassignment.
    When I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I navigate to "Settings" in current page administration
    And I set the following fields to these values:
        | blindmarking | 1 |
    And I press "Save"
    When I am on the "Test qbassignment name" Activity page
    And I follow "View all submissions"
    And I select "Reveal student identities" from the "Grading action" singleselect
    And I press "Continue"
    And I should see "Sam1 Student1"
    When I am on the "Course 1" "reset" page
    And I set the following fields to these values:
        | Delete all submissions | 1 |
    And I press "Reset course"
    And I press "Continue"
    And I am on the "Test qbassignment name" Activity page
    And I follow "View all submissions"
    Then I should not see "Sam1 Student1"
