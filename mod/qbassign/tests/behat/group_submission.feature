@mod @mod_qbassign
Feature: Group qbassignment submissions
  In order to allow students to work collaboratively on an qbassignment
  As a teacher
  I need to group submissions in groups

  @javascript
  Scenario: Switch between group modes
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 1 |
    And the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Teacher | 1 | teacher1@example.com |
      | student0 | Student | 0 | student0@example.com |
      | student1 | Student | 1 | student1@example.com |
      | student2 | Student | 2 | student2@example.com |
      | student3 | Student | 3 | student3@example.com |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student0 | C1 | student |
      | student1 | C1 | student |
      | student2 | C1 | student |
      | student3 | C1 | student |
    And the following "groups" exist:
      | name | course | idnumber |
      | Group 1 | C1 | G1 |
    And the following "activity" exists:
      | activity         | qbassign                      |
      | course           | C1                          |
      | name             | Test qbassignment name        |
      | intro            | Test qbassignment description |
      | submissiondrafts | 0                           |
      | teamsubmission   | 1                           |
    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    Then "//tr[contains(., 'Student 0')][contains(., 'Default group')]" "xpath_element" should exist
    And "//tr[contains(., 'Student 1')][contains(., 'Default group')]" "xpath_element" should exist
    And "//tr[contains(., 'Student 2')][contains(., 'Default group')]" "xpath_element" should exist
    And "//tr[contains(., 'Student 3')][contains(., 'Default group')]" "xpath_element" should exist
    And I am on the "Test qbassignment name" "qbassign activity editing" page
    And I set the following fields to these values:
      | Group mode | Separate groups |
    And I press "Save and return to course"
    And I navigate to "Settings" in current page administration
    And I set the following fields to these values:
      | Group mode | Separate groups |
    And I press "Save and display"
    And the following "group members" exist:
      | user | group |
      | student0 | G1 |
      | student1 | G1 |
    And I am on the "Test qbassignment name" "qbassign activity" page
    And I follow "View all submissions"
    And I set the field "Separate groups" to "Group 1"
    And "//tr[contains(., 'Student 0')][contains(., 'Group 1')]" "xpath_element" should exist
    And "//tr[contains(., 'Student 1')][contains(., 'Group 1')]" "xpath_element" should exist
    And I should not see "Student 2"
    And I set the field "Separate groups" to "All participants"
    And "//tr[contains(., 'Student 0')][contains(., 'Group 1')]" "xpath_element" should exist
    And "//tr[contains(., 'Student 1')][contains(., 'Group 1')]" "xpath_element" should exist
    And "//tr[contains(., 'Student 2')][contains(., 'Default group')]" "xpath_element" should exist
    And "//tr[contains(., 'Student 3')][contains(., 'Default group')]" "xpath_element" should exist

  @javascript
  Scenario: Confirm that the grading status changes for each group member
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
    And the following "group members" exist:
      | user | group |
      | student1 | G1 |
      | student2 | G1 |
    And the following "activity" exists:
      | activity                            | qbassign                      |
      | course                              | C1                          |
      | name                                | Test qbassignment name        |
      | intro                               | Test qbassignment description |
      | submissiondrafts                    | 0                           |
      | qbassignsubmission_onlinetex_enabled | 1                           |
      | qbassignsubmission_file_enabled       | 0                           |
      | teamsubmission                      | 1                           |
      | preventsubmissionnotingroup         | 0                           |
    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                          |
      | Test qbassignment name  | student1  | I'm the student's first submission  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    Then "Student 1" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 2" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 3" row "Status" column of "generaltable" table should not contain "Submitted for grading"
    And "Student 4" row "Status" column of "generaltable" table should not contain "Submitted for grading"

    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                          |
      | Test qbassignment name  | student3  | I'm the student's first submission  |

    And I am on the "Test qbassignment name" Activity page
    And I follow "View all submissions"
    And "Student 1" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 2" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 3" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 4" row "Status" column of "generaltable" table should contain "Submitted for grading"

  @javascript
  Scenario: Confirm that group submissions can be reopened
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
    And the following "group members" exist:
      | user | group |
      | student1 | G1 |
      | student2 | G1 |
    And the following "activity" exists:
      | activity                            | qbassign                      |
      | course                              | C1                          |
      | name                                | Test qbassignment name        |
      | intro                               | Test qbassignment description |
      | submissiondrafts                    | 0                           |
      | qbassignsubmission_onlinetex_enabled | 1                           |
      | qbassignsubmission_file_enabled       | 0                           |
      | teamsubmission                      | 1                           |
      | attemptreopenmethod                 | manual                      |
      | requireallteammemberssubmit         | 0                           |

    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                          |
      | Test qbassignment name  | student1  | I'm the student's first submission  |

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I follow "View all submissions"
    And I click on "Grade" "link" in the "Student 1" "table_row"
    And I set the following fields to these values:
      | Grade out of 100 | 50.0 |
      | Apply grades and feedback to entire group | 1 |
    And I press "Save changes"
    And I set the following fields to these values:
      | Allow another attempt | 1 |
    And I press "Save changes"
    When I am on "Course 1" course homepage
    And I am on the "Test qbassignment name" "qbassign activity" page
    And I follow "View all submissions"
    Then "Student 1" row "Status" column of "generaltable" table should contain "Reopened"
    And "Student 2" row "Status" column of "generaltable" table should contain "Reopened"

  Scenario: Confirm groups and submission counts are correct
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode |
      | Course 1 | C1 | 0 | 1 |
    And the following "users" exist:
      | username | firstname | lastname | email |
      | student1 | Student | 1 | student1@example.com |
      | student2 | Student | 2 | student2@example.com |
      | student3 | Student | 3 | student3@example.com |
      | student4 | Student | 4 | student4@example.com |
      | student5 | Student | 5 | student5@example.com |
      | student6 | Student | 6 | student6@example.com |
    And the following "course enrolments" exist:
      | user | course | role |
      | student1 | C1 | student |
      | student2 | C1 | student |
      | student3 | C1 | student |
      | student4 | C1 | student |
      | student5 | C1 | student |
      | student6 | C1 | student |
    And the following "groups" exist:
      | name | course | idnumber |
      | Group 1 | C1 | G1 |
      | Group 2 | C1 | G2 |
      | Group 3 | C1 | G3 |
    And the following "group members" exist:
      | user | group |
      | student1 | G1 |
      | student2 | G1 |
      | student3 | G2 |
      | student4 | G2 |
      | student5 | G3 |
      | student6 | G3 |
    And the following "groupings" exist:
      | name | course | idnumber |
      | Grouping 1 | C1 | GG1 |
    And the following "grouping groups" exist:
      | grouping | group |
      | GG1      | G1    |
      | GG1      | G2    |
      # Groupmode 1 = Separate Groups
    And the following "activity" exists:
      | activity                             | qbassign                       |
      | course                               | C1                           |
      | name                                 | Test qbassignment name         |
      | intro                                | Test qbassignment description  |
      | submissiondrafts                     | 0                            |
      | qbassignsubmission_onlinetex_enabled  | 1                            |
      | qbassignsubmission_file_enabled        | 0                            |
      | teamsubmission                       | 1                            |
      | attemptreopenmethod                  | manual                       |
      | requireallteammemberssubmit          | 0                            |
      | groupmode                            | 1                            |
      | teamsubmissiongroupingid             | GG1                          |
      | submissiondrafts                     | 0                            |

    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                          |
      | Test qbassignment name  | student1  | I'm the student's first submission  |
      | Test qbassignment name  | student3  | I'm the student's first submission  |
      | Test qbassignment name  | student5  | I'm the student's first submission  |

    And I am on the "Test qbassignment name" Activity page logged in as admin
    And I should see "3" in the "Groups" "table_row"
    And I should see "3" in the "Submitted" "table_row"
    When I select "Group 1" from the "Separate groups" singleselect
    Then I should see "1" in the "Groups" "table_row"
    And I should see "1" in the "Submitted" "table_row"
    When I select "Group 2" from the "Separate groups" singleselect
    And I should see "1" in the "Groups" "table_row"
    And I should see "1" in the "Submitted" "table_row"
    When I select "Group 3" from the "Separate groups" singleselect
    And I should see "1" in the "Groups" "table_row"
    And I should see "1" in the "Submitted" "table_row"

  Scenario: Confirm that the submission status changes for each group member
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
      | name | course | idnumber |
      | Group 1 | C1 | G1 |
    And the following "group members" exist:
      | user | group |
      | student1 | G1 |
      | student2 | G1 |
    And the following "activity" exists:
      | activity                             | qbassign                       |
      | course                               | C1                           |
      | name                                 | Test qbassignment name         |
      | intro                                | Test qbassignment description  |
      | submissiondrafts                     | 1                            |
      | qbassignsubmission_onlinetex_enabled  | 1                            |
      | qbassignsubmission_file_enabled        | 0                            |
      | teamsubmission                       | 1                            |
      | attemptreopenmethod                  | manual                       |
      | requireallteammemberssubmit          | 0                            |
      # Groupmode 0 = No Groups
      | groupmode                            | 0                            |
      | preventsubmissionnotingroup          | 0                            |
      | submissiondrafts                     | 0                            |
      | teamsubmission                       | 1                            |

    And the following "mod_qbassign > submissions" exist:
      | qbassign                | user      | onlinetex                          |
      | Test qbassignment name  | student1  | I'm the student's first submission  |

    And I log in as "teacher1"
    And I am on "Course 1" course homepage with editing mode on
    And I add the "Activities" block
    And I log out

    And I am on the "C1" Course page logged in as student1
    And I click on "qbassignments" "link" in the "Activities" "block"
    And I should see "Submitted for grading"
    And I log out

    And I am on the "C1" Course page logged in as student2
    And I click on "qbassignments" "link" in the "Activities" "block"
    And I should see "Submitted for grading"
    And I log out

    And I am on the "Test qbassignment name" Activity page logged in as teacher1
    When I follow "View all submissions"
    Then "Student 1" row "Status" column of "generaltable" table should contain "Submitted for grading"
    And "Student 2" row "Status" column of "generaltable" table should contain "Submitted for grading"

  @javascript @_file_upload
  Scenario: Student can submit or edit group qbassignment depending on 'requireallteammemberssubmit' setting
    Given the following "courses" exist:
      | fullname | shortname | category | groupmode   |
      | Course 1 | C1        | 0        | 2           |
    And the following "users" exist:
      | username | firstname | lastname  | email                |
      | teacher1 | Terry     | Alexander | teacher1@example.com |
      | student1 | Sam       | Edwards   | student1@example.com |
      | student2 | Carlos    | Rivera    | student2@example.com |
    And the following "course enrolments" exist:
      | user     | course | role           |
      | teacher1 | C1     | editingteacher |
      | student1 | C1     | student        |
      | student2 | C1     | student        |
    And the following "groups" exist:
      | name    | course | idnumber |
      | Group 1 | C1     | G1       |
    And the following "group members" exist:
      | user     | group |
      | student1 | G1    |
      | student2 | G1    |
    And the following "activities" exist:
      | activity | course | name     | qbassignsubmission_onlinetex_enabled | qbassignsubmission_file_enabled | qbassignsubmission_file_maxfiles | qbassignsubmission_file_maxsizebytes | submissiondrafts | teamsubmission | requireallteammemberssubmit |
      | qbassign   | C1     | qbassign 1 | 1                                   | 1                             | 1                              | 2097152                            | 1                | 1              | 1                           |
      | qbassign   | C1     | qbassign 2 | 1                                   | 1                             | 1                              | 2097152                            | 0                | 1              | 0                           |
    # Submit an qbassignment with 'requireallteammemberssubmit' setting enabled
    When I am on the "qbassign 1" "qbassign activity" page logged in as student1
    Then I should see "Group 1"
    And I should not see "Carlos Rivera"
    And I press "Add submission"
    And I set the field "Online text" to "student1 submission"
    And I upload "lib/tests/fixtures/empty.txt" file to "File submissions" filemanager
    And I press "Save changes"
    # Confirm that Submission status remains as draft and all students appear because 'Submit qbassignment' was not yet clicked
    And I should see "Draft (not submitted)" in the "Submission status" "table_row"
    And I should see "Users who need to submit: Sam Edwards, Carlos Rivera"
    And I press "Submit qbassignment"
    And I press "Continue"
    # Confirm that Submission status remains as draft and only student2 appears because student2 has not yet submitted qbassignment
    And I am on the "qbassign 1" "qbassign activity" page logged in as student2
    And I should see "Draft (not submitted)" in the "Submission status" "table_row"
    And I should see "Users who need to submit: Carlos Rivera"
    And I press "Edit submission"
    And I set the field "Online text" to "student2 updated submission"
    And I delete "empty.txt" from "File submissions" filemanager
    And I upload "lib/tests/fixtures/tabfile.csv" file to "File submissions" filemanager
    And I press "Save changes"
    And I press "Submit qbassignment"
    And I press "Continue"
    # Confirm that Submission status is now Submitted for grading and all changes made by student2 is reflected on qbassignment
    And I am on the "qbassign 1" "qbassign activity" page logged in as student1
    And I should see "Submitted for grading" in the "Submission status" "table_row"
    And I should see "student2 updated submission" in the "Online text" "table_row"
    And I should see "tabfile.csv" in the "File submissions" "table_row"
    And I should not see "student1 submission" in the "Online text" "table_row"
    And I should not see "empty.txt" in the "File submissions" "table_row"
    # Submit an qbassignment with 'requireallteammemberssubmit' disabled
    And I am on the "qbassign 2" "qbassign activity" page logged in as student1
    And I should see "Group 1"
    And I should not see "Carlos Rivera"
    And I press "Add submission"
    And I set the field "Online text" to "student1 submission"
    And I upload "lib/tests/fixtures/empty.txt" file to "File submissions" filemanager
    And I press "Save changes"
    # Confirm that Submission status is immediately set to Submitted for grading for all students after student1 submits qbassignments
    And I am on the "qbassign 2" "qbassign activity" page logged in as student2
    And I should see "Submitted for grading" in the "Submission status" "table_row"
    And I should not see "Users who need to submit"
