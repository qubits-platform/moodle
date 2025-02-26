@mod @mod_qbassign
Feature: qbassignment with no calendar capabilites
  In order to allow work effectively
  As a teacher
  I need to be able to create qbassignments even when I cannot edit calendar events

  Background:
    Given the following "courses" exist:
      | fullname  | shortname  | category  | groupmode  |
      | Course 1  | C1         | 0         | 1          |
    And the following "users" exist:
      | username  | firstname  | lastname  | email                 |
      | teacher1  | Teacher    | 1         | teacher1@example.com  |
    And the following "course enrolments" exist:
      | user      | course  | role            |
      | teacher1  | C1      | editingteacher  |
    And I am on the "C1" "permissions" page logged in as admin
    And I override the system permissions of "Teacher" role with:
      | capability                     | permission  |
      | moodle/calendar:manageentries  | Prohibit    |

  Scenario: Editing an qbassignment
    Given the following "activities" exist:
      | activity   | name                   | intro                        | course | section |
      | qbassign     | Test qbassignment name   | Test qbassignment description  | C1     | 1       |
    And I am on the "Test qbassignment name" Activity page
    And I navigate to "Settings" in current page administration
    And I set the following fields to these values:
      | Allow submissions from | ##1 January 2017##          |
      | Due date               | ##1 February 2017##         |
      | Cut-off date           | ##2 February 2017##         |
      | Remind me to grade by  | ##1 March 2017##            |
    And I press "Save and return to course"
    And I log out

    When I am on the "Test qbassignment name" Activity page logged in as teacher1
    And I navigate to "Settings" in current page administration
    And I set the following fields to these values:
      | Allow submissions from | ##1 January 2018##  |
      | Due date               | ##1 February 2018## |
      | Cut-off date           | ##2 February 2018## |
      | Remind me to grade by  | ##1 March 2018##    |
    And I press "Save and return to course"
    Then I should see "Test qbassignment name"
