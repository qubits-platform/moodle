@mod @mod_qbassign @qbassignfeedback @qbassignfeedback_editpd @javascript @_file_upload
Feature: Ensure that a comment remains visible if its popup menu is open
  In order to insert quick list comments in the PDF editor
  As a teacher
  I need the comment to stay visible when its popup menu is open

  Background:
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
      | activity                            | qbassign                |
      | course                              | C1                    |
      | name                                | Test qbassignment name  |
      | qbassignsubmission_file_enabled       | 1                     |
      | qbassignsubmission_file_maxfiles      | 1                     |
      | qbassignsubmission_file_maxsizebytes  | 102400                |
      | qbassignfeedback_editpd_enabled      | 1                     |
      | submissiondrafts                    | 0                     |
    And the following "mod_qbassign > submission" exists:
      | qbassign  | Test qbassignment name                                       |
      | user    | student1                                                   |
      | file    | mod/qbassign/feedback/editpd/tests/fixtures/submission.pdf  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I click on "Grade" "link" in the "Submitted for grading" "table_row"
    And I wait for the complete PDF to load

  Scenario: Add an empty comment and open its menu
    When I click on ".commentbutton" "css_element"
    And I draw on the pdf
    And I click on ".commentdrawable a" "css_element"
    Then ".drawingcanvas .commentdrawable" "css_element" should exist

  Scenario: Add text to a comment and open its menu
    When I click on ".commentbutton" "css_element"
    And I draw on the pdf
    And I set the field with xpath "//div[@class='commentdrawable']//textarea" to "Comment"
    And I click on ".commentdrawable a" "css_element"
    Then ".drawingcanvas .commentdrawable" "css_element" should exist
    And the "class" attribute of ".drawingcanvas .commentdrawable" "css_element" should not contain "commentcollapsed"
