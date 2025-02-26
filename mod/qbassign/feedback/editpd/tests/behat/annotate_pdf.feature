@mod @mod_qbassign @qbassignfeedback @qbassignfeedback_editpd @_file_upload
Feature: In an qbassignment, teacher can annotate PDF files during grading
  In order to provide visual report on a graded PDF
  As a teacher
  I need to use the PDF editor

  @javascript
  Scenario: Submit a PDF file as a student and annotate the PDF as a teacher
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
      | qbassignfeedback_editpd_enabled      | 1                     |
      | qbassignfeedback_comments_enabled     | 1                     |
      | qbassignsubmission_file_enabled       | 1                     |
      | qbassignsubmission_file_maxfiles      | 2                     |
      | qbassignsubmission_file_maxsizebytes  | 102400                |
      | maxfilessubmission                  | 2                     |
      | submissiondrafts                    | 0                     |
    And the following "mod_qbassign > submission" exists:
      | qbassign  | Test qbassignment name                                                                                              |
      | user    | student1                                                                                                          |
      | file    | mod/qbassign/feedback/editpd/tests/fixtures/submission.pdf, mod/qbassign/feedback/editpd/tests/fixtures/testgs.pdf  |
    And I log in as "admin"
    And I am on site homepage
    And I navigate to "Plugins > Activity modules > qbassignment > Feedback plugins > Annotate PDF" in site administration
    And I upload "pix/help.png" file to "" filemanager
    And I upload "pix/docs.png" file to "" filemanager
    And I press "Save changes"
    And I should see "Changes saved"
    And I follow "Test ghostscript path"
    And I should see "The ghostscript path appears to be OK"
    And I am on site homepage
    And I log out

    When I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I click on "Grade" "link" in the "Submitted for grading" "table_row"
    Then I should see "Page 1 of 3"
    And I click on ".navigate-next-button" "css_element"
    And I should see "Page 2 of 3"
    And I click on ".stampbutton" "css_element"
    And I click on ".linebutton" "css_element"
    And I click on ".commentcolourbutton" "css_element"
    And I click on "//img[@alt=\"Blue\"]/parent::button" "xpath_element"
    And I wait until the page is ready
    And I press "Save changes"
    And I wait until the page is ready
    And I should see "The changes to the grade and feedback were saved"

  @javascript
  Scenario: Submit a PDF file as a student in a team and annotate the PDF as a teacher
    Given ghostscript is installed
    And the following "courses" exist:
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
      | G1 | C1 | G1 |
      | G2 | C1 | G2 |
    And the following "groupings" exist:
      | name | course | idnumber |
      | G1   | C1     | G1       |
    And the following "group members" exist:
      | user        | group |
      | student1    | G1  |
      | student2    | G1  |
      | student3    | G2  |
      | student4    | G2  |
    And the following "grouping groups" exist:
      | grouping | group |
      | G1       | G1    |
      | G1       | G2    |
    And the following "activity" exists:
      | activity                            | qbassign                |
      | course                              | C1                    |
      | name                                | Test qbassignment name  |
      | qbassignfeedback_comments_enabled     | 1                     |
      | qbassignfeedback_editpd_enabled      | 1                     |
      | qbassignsubmission_file_enabled       | 1                     |
      | qbassignsubmission_file_maxfiles      | 2                     |
      | qbassignsubmission_file_maxsizebytes  | 102400                |
      | maxfilessubmission                  | 2                     |
      | teamsubmission                      | 1                     |
      | grouping                            | G1                    |
      | submissiondrafts                    | 0                     |
    And the following "mod_qbassign > submission" exists:
      | qbassign  | Test qbassignment name                                       |
      | user    | student1                                                   |
      | file    | mod/qbassign/feedback/editpd/tests/fixtures/submission.pdf  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I open the action menu in "Student 2" "table_row"
    And I click on "Grade" "link" in the "Student 2" "table_row"
    And I wait for the complete PDF to load
    And I click on ".linebutton" "css_element"
    And I draw on the pdf
    And I press "Save changes"
    And I should see "The changes to the grade and feedback were saved"
    And I follow "View all submissions"
    And I should see "View annotated PDF..." in the "student2@example.com" "table_row"
