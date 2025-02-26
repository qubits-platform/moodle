@mod @mod_qbassign
Feature: In an qbassignment, students start a new attempt based on their previous one
  In order to improve my submission
  As a student
  I need to submit my qbassignment editing an online form, receive feedback, and then improve my submission.

  @javascript
  Scenario: Submit a text online and edit the submission
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 1 |
    And the following "activity" exists:
      | activity                            | qbassign                  |
      | course                              | C1                      |
      | name                                | Test qbassignment name    |
      | intro                               | Submit your online text |
      | qbassignsubmission_onlinetex_enabled | 1                       |
      | qbassignsubmission_file_enabled       | 0                       |
      | attemptreopenmethod                 | manual                  |
      | hidegrader                          | 1                       |
      | submissiondrafts                    | 0                       |
    And the following "users" exist:
      | username  | firstname  | lastname  | email                 |
      | teacher1  | Teacher    | 1         | teacher1@example.com  |
      | student1  | Student    | 1         | student1@example.com  |
    And the following "course enrolments" exist:
      | user      | course  | role            |
      | teacher1  | C1      | editingteacher  |
      | student1  | C1      | student         |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                       |
      | Test qbassignment name  | student1  | I'm the student first submission |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I click on "Grade" "link" in the "Student 1" "table_row"
    And I set the following fields to these values:
      | Allow another attempt | 1 |
    And I press "Save changes"
    And I click on "Edit settings" "link"
    And I log out

    When I am on the "Test qbassignment name" Activity page logged in as student1
    Then I should not see "Teacher 1"
    And I press "Add a new attempt based on previous submission"
    And I press "Save changes"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I click on "Grade" "link" in the "Student 1" "table_row"
    And I should see "I'm the student first submission"

  @javascript @_alert
  Scenario: Allow new attempt does not display incorrect error message on group submission
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
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student1 | C1 | student |
      | student2 | C1 | student |
      | student3 | C1 | student |
      | student4 | C1 | student |
    And the following "groups" exist:
      | name | course | idnumber |
      | Group 1 | C1 | G1 |
      | Group 2 | C1 | G2 |
    And the following "group members" exist:
      | user | group |
      | student1 | G1 |
      | student2 | G1 |
      | student3 | G2 |
      | student4 | G2 |

    And the following "activity" exists:
      | activity                             | qbassign                |
      | course                               | C1                    |
      | name                                 | Test qbassignment name  |
      | qbassignsubmission_onlinetex_enabled  | 1                     |
      | qbassignsubmission_file_enabled        | 0                     |
      | attemptreopenmethod                  | manual                |
      | submissiondrafts                     | 0                     |
      | groupmode                            | 1                     |
      | teamsubmission                       | 1                     |
      | hidegrader                           | 1                     |
      | maxattempts                          | 3                     |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                        |
      | Test qbassignment name  | student1  | I'm the student first submission  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    Then "Student 1" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 2" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 3" row "Status" column of "generaltable" table should contain "No submission"
    And "Student 4" row "Status" column of "generaltable" table should contain "No submission"
    And I click on "Quick grading" "checkbox"
    And I click on "Student 1" "checkbox"
    And I set the field "User grade" to "60.0"
    And I press "Save all quick grading changes"
    And I should see "The grade changes were saved"
    And I press "Continue"
    And I click on "Student 1" "checkbox"
    And I set the following fields to these values:
      | operation | Allow another attempt |
    And I click on "Go" "button" confirming the dialogue
    And I should not see "The grades were not saved because someone has modified one or more records more recently than when you loaded the page."
    And I log out
    And I am on the "Test qbassignment name" Activity page logged in as student3
    And I should see "This is attempt 1 ( 3 attempts allowed )."
    And I press "Add submission"
    And I set the following fields to these values:
      | Online text | I'm the student's 3 group 2 first attempt |
    And I press "Save changes"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And "Student 1" row "Status" column of "generaltable" table should contain "Reopened"
    And "Student 2" row "Status" column of "generaltable" table should contain "Reopened"
    And "Student 3" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 4" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And I click on "Grade" "link" in the "Student 3" "table_row"
    And I set the following fields to these values:
      | Allow another attempt | 1 |
    And I press "Save changes"
    And I follow "qbassignment: Test qbassignment name"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student4
    And I should see "This is attempt 2 ( 3 attempts allowed )."
    And I press "Add a new attempt"
    And I set the following fields to these values:
      | Online text | I'm the student's 4 group 2 second attempt |
    And I press "Save changes"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I select "Group 2" from the "group" singleselect
    And I click on "Grade" "link" in the ".tertiary-navigation" "css_element"
    And I should see "2" in the "#id_attemptsettings" "css_element"
