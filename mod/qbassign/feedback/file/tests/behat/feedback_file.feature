@mod @mod_qbassign @qbassignfeedback @qbassignfeedback_file @_file_upload
Feature: In an qbassignment, teacher can submit feedback files during grading
  In order to provide a feedback file
  As a teacher
  I need to submit a feedback file.

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
    And the following "groups" exist:
      | name     | course | idnumber |
      | G1       | C1     | G1       |
    And the following "group members" exist:
      | user     | group |
      | student1 | G1    |
      | student2 | G1    |
    And the following "activity" exists:
      | activity                            | qbassign                |
      | course                              | C1                    |
      | name                                | Test qbassignment name  |
      | qbassignsubmission_file_enabled       | 1                     |
      | qbassignsubmission_file_maxfiles      | 1                     |
      | qbassignsubmission_file_maxsizebytes  | 1024                  |
      | qbassignfeedback_comments_enabled     | 1                     |
      | qbassignfeedback_file_enabled         | 1                     |
      | maxfilessubmission                  | 2                     |
      | teamsubmission                      | 1                     |
      | submissiondrafts                    | 0                     |
    And the following "mod_qbassign > submission" exists:
      | qbassign  | Test qbassignment name                                    |
      | user    | student1                                                |
      | file    | mod/qbassign/feedback/file/tests/fixtures/submission.txt  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I click on "Grade" "link" in the ".tertiary-navigation" "css_element"
    And I upload "mod/qbassign/feedback/file/tests/fixtures/feedback.txt" file to "Feedback files" filemanager

  @javascript
  Scenario: A teacher can provide a feedback file when grading an qbassignment.
    Given I set the field "applytoall" to "0"
    And I press "Save changes"
    And I click on "Course 1" "link" in the "[data-region=qbassignment-info]" "css_element"
    And I log out
    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I should see "feedback.txt"
    And I log out
    And I am on the "Test qbassignment name" Activity page logged in as student2
    Then I should not see "feedback.txt"

  @javascript
  Scenario: A teacher can provide a feedback file when grading an qbassignment and all students in the group will receive the file.
    Given I press "Save changes"
    And I click on "Course 1" "link" in the "[data-region=qbassignment-info]" "css_element"
    And I log out
    And I am on the "Test qbassignment name" Activity page logged in as student1
    And I should see "feedback.txt"
    And I log out
    When I am on the "Test qbassignment name" Activity page logged in as student2
    Then I should see "feedback.txt"
