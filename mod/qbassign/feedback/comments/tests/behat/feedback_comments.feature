@mod @mod_qbassign @qbassignfeedback @qbassignfeedback_comments
Feature: In an qbassignment, teachers can provide feedback comments on student submissions
  In order to provide feedback to students on their qbassignments
  As a teacher,
  I need to create feedback comments against their submissions.

  Background:
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 0 |
    And the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Teacher | 1 | teacher1@example.com |
      | student1 | Student | 1 | student1@example.com |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | teacher |
      | student1 | C1 | student |

  @javascript @skip_chrome_zerosize
  Scenario: Teachers should be able to add and remove feedback comments via the quick grading interface
    Given the following "activities" exist:
      | activity  | course  | name                  | qbassignsubmission_onlinetex_enabled  | qbassignfeedback_comments_enabled  |
      | qbassign    | C1      | Test qbassignment name  | 1                                    | 1                                |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                   |
      | Test qbassignment name  | student1  | I'm the student1 submission  |
    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    Then I click on "Quick grading" "checkbox"
    And I set the field "Feedback comments" to "Feedback from teacher."
    And I press "Save all quick grading changes"
    And I should see "The grade changes were saved"
    And I press "Continue"
    And I should see "Feedback from teacher."
    And I set the field "Feedback comments" to ""
    And I press "Save all quick grading changes"
    And I should see "The grade changes were saved"
    And I press "Continue"
    And I should not see "Feedback from teacher."
