@mod @mod_qbassign
Feature: Remove a submission
  In order to restart an qbassignment for a student
  As a teacher
  I need to remove a student submission at any time

  Background:
    Given I log in as "admin"
    And I set the following system permissions of "Teacher" role:
      | capability                     | permission |
      | mod/qbassign:editothersubmission | Allow      |
    And I set the following administration settings values:
      | Enable timed qbassignments | 1 |
    And I log out
    And the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 0 |
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
    And the following "groups" exist:
      | name    | course | idnumber |
      | Group 1 | C1     | G1       |
    And the following "group members" exist:
      | user     | group   |
      | student1 | G1 |
      | student2 | G1 |

  @javascript @skip_chrome_zerosize
  Scenario: Remove a submission should remove the data that was submitted
    Given the following "activity" exists:
      | activity                             | qbassign                |
      | course                               | C1                    |
      | name                                 | Test qbassignment name  |
      | submissiondrafts                     | 0                     |
      | qbassignsubmission_onlinetex_enabled  | 1                     |
      | qbassignsubmission_file_enabled        | 0                     |
      | submissiondrafts                     | 0                     |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                  |
      | Test qbassignment name  | student1  | I'm the student submission  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I open the action menu in "Student 1" "table_row"
    When I follow "Remove submission"
    And I click on "Continue" "button"
    Then I should not see "I'm the student submission"
    And "Student 1" row "Status" column of "generaltable" table should contain "No submission"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I should not see "I'm the student submission"
    And I should see "No submissions have been made yet" in the "Submission status" "table_row"

  @javascript @skip_chrome_zerosize
  Scenario: Remove a group submission should remove the data from all group members
    Given the following "activity" exists:
      | activity                             | qbassign                |
      | course                               | C1                    |
      | name                                 | Test qbassignment name  |
      | submissiondrafts                     | 0                     |
      | qbassignsubmission_onlinetex_enabled  | 1                     |
      | qbassignsubmission_file_enabled        | 0                     |
      | teamsubmission                       | 1                     |
      | submissiondrafts                     | 0                     |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                  |
      | Test qbassignment name  | student1  | I'm the student submission  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I open the action menu in "Student 1" "table_row"
    When I follow "Remove submission"
    And I click on "Continue" "button"
    Then I should not see "I'm the student submission"
    And "Student 1" row "Status" column of "generaltable" table should contain "No submission"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student2
    And I should not see "I'm the student submission"
    And I should see "Nothing has been submitted for this qbassignment" in the "Submission status" "table_row"

  @javascript @skip_chrome_zerosize
  Scenario: A student can remove their own submission
    Given the following "activity" exists:
      | activity                             | qbassign                |
      | course                               | C1                    |
      | name                                 | Test qbassignment name  |
      | submissiondrafts                     | 0                     |
      | qbassignsubmission_onlinetex_enabled  | 1                     |
      | qbassignsubmission_file_enabled        | 0                     |
      | submissiondrafts                     | 0                     |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                  |
      | Test qbassignment name  | student1  | I'm the student submission  |

    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I click on "Remove submission" "button"
    And I click on "Continue" "button"
    And I log out

    When I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    Then I should not see "I'm the student submission"
    And "Student 1" row "Status" column of "generaltable" table should contain "No submission"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I should not see "I'm the student submission"
    And I should see "No submissions have been made yet" in the "Submission status" "table_row"

  @javascript @skip_chrome_zerosize @_file_upload
  Scenario: Submission removal with time limit setting
    Given the following "activity" exists:
      | activity                            | qbassign                          |
      | course                              | C1                              |
      | name                                | Test qbassignment with time limit |
      | qbassignsubmission_onlinetex_enabled | 1                               |
      | qbassignsubmission_file_enabled       | 1                               |
      | qbassignsubmission_file_maxfiles      | 1                               |
      | qbassignsubmission_file_maxsizebytes  | 1000000                         |
      | submissiondrafts                    | 0                               |
      | allowsubmissionsfromdate_enabled    | 0                               |
      | duedate_enabled                     | 0                               |
      | cutoffdate_enabled                  | 0                               |
      | gradingduedate_enabled              | 0                               |
    And I am on the "Test qbassignment with time limit" Activity page logged in as admin
    And I navigate to "Settings" in current page administration
    And I follow "Expand all"
    # Set 'Time limit' to 5 seconds.
    And I set the field "timelimit[enabled]" to "1"
    And I set the field "timelimit[number]" to "5"
    And I set the field "timelimit[timeunit]" to "seconds"
    And I press "Save and return to course"
    When I am on the "Test qbassignment with time limit" Activity page logged in as student1
    And I click on "Begin qbassignment" "link"
    And I click on "Begin qbassignment" "button"
    And I upload "lib/tests/fixtures/empty.txt" file to "File submissions" filemanager
    And I press "Save changes"
    And I click on "Remove submission" "button"
    Then I should see "Are you sure you want to remove your submission? Please note that this will not reset your time limit."
    And I press "Cancel"
    And I am on the "Test qbassignment with time limit" Activity page logged in as admin
    And I click on "View all submissions" "link"
    And I open the action menu in "Student 1" "table_row"
    And I follow "Remove submission"
    And I should see "Are you sure you want to remove the submission for Student 1? Please note that this will not reset the student's time limit. You can give more time by adding a time limit user override."
