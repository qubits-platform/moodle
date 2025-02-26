@mod @mod_qbassign
Feature: In an qbassignment, teachers can edit a students submission inline
  In order to easily mark students qbassignments
  As a teacher
  I need to have a students submission text copied to the grading online form.

  @javascript @_file_upload
  Scenario: Submit a text online and edit the submission
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 1 |
    And the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Teacher | 1 | teacher1@example.com |
      | student1 | Student | 1 | student1@example.com |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student1 | C1 | student |
    And the following "activity" exists:
      | activity                              | qbassign                  |
      | course                                | C1                      |
      | name                                  | Test qbassignment name    |
      | qbassignsubmission_onlinetex_enabled   | 1                       |
      | qbassignsubmission_file_enabled         | 0                       |
      | qbassignfeedback_comments_enabled       | 1                       |
      | qbassignfeedback_file_enabled           | 1                       |
      | qbassignfeedback_comments_commentinline | 1                       |
      | submissiondrafts                      | 0                       |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                        |
      | Test qbassignment name  | student1  | I'm the student first submission  |

    When I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I click on "Grade" "link" in the "Student 1" "table_row"
    And I set the following fields to these values:
      | Grade out of 100 | 50 |
      | Feedback comments | I'm the teacher feedback |
    And I upload "lib/tests/fixtures/empty.txt" file to "Feedback files" filemanager
    And I press "Save changes"
    And I follow "View all submissions"
    Then I should see "50.00" in the "Student 1" "table_row"
    And I should see "Submitted for grading" in the "Student 1" "table_row"
    And I should see "Graded" in the "Student 1" "table_row"
    And I should see "I'm the student first submission" in the "Student 1" "table_row"
    And I should see "I'm the teacher feedback" in the "Student 1" "table_row"
    And I should see "empty.txt" in the "Student 1" "table_row"
    And I log out

    When I am on the "Test qbassignment name" Activity page logged in as student1
    And I should see "Submitted for grading" in the "Submission status" "table_row"
    And I should see "Graded" in the "Grading status" "table_row"
    And I should see "I'm the student first submission" in the "Online text" "table_row"
    And I should see "I'm the teacher feedback" in the "Feedback comments" "table_row"
    And I should see "empty.txt" in the "Feedback files" "table_row"
