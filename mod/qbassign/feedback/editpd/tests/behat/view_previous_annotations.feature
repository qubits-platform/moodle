@mod @mod_qbassign @qbassignfeedback @qbassignfeedback_editpd @_file_upload
Feature: In an qbassignment, teacher can view the feedback for a previous attempt.
  In order to see the history of attempts
  As a teacher
  I need to see the previous annotations.

  @javascript
  Scenario: Submit a PDF file as a student and annotate the PDF as a teacher, allowing another attempt
    Given ghostscript is installed
    And the following "courses" exist:
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
      | activity                           | qbassign               |
      | course                             | C1                   |
      | name                               | Test qbassignment name |
      | maxattempts                        | 0                    |
      | qbassignsubmission_file_enabled      | 1                    |
      | qbassignsubmission_file_maxfiles     | 2                    |
      | qbassignsubmission_file_maxsizebytes | 102400               |
      | qbassignfeedback_editpd_enabled     | 1                    |
      | submissiondrafts                   | 0                    |
      | attemptreopenmethod                | manual               |
    And the following "mod_qbassign > submission" exists:
      | qbassign  | Test qbassignment name                                                                                              |
      | user    | student1                                                                                                          |
      | file    | mod/qbassign/feedback/editpd/tests/fixtures/submission.pdf, mod/qbassign/feedback/editpd/tests/fixtures/testgs.pdf  |

    When I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I click on "Grade" "link" in the "Submitted for grading" "table_row"
    Then I should see "Page 1 of 3"
    And I click on ".navigate-next-button" "css_element"
    And I should see "Page 2 of 3"
    And I click on ".stampbutton" "css_element"
    And I draw on the pdf
    And I wait until the page is ready
    And I set the field "Allow another attempt" to "Yes"
    And I press "Save changes"
    And I wait until the page is ready
    And I should see "The changes to the grade and feedback were saved"
    And I follow "View a different attempt"
    And I click on "Attempt 1" "radio" in the "View a different attempt" "dialogue"
    And I press "View"
    And I wait until the page is ready
    And I should see "You are editing the feedback for a previous attempt. This is attempt 1 out of 2."
    And I should see "Page 1 of 3"
