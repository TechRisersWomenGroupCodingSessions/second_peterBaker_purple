# An introduction to TDD based on the Kata "Pete, the baker"

## 1. The Kata "Pete the Baker"

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths.

Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer).

For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

_Examples:_
- must return 2:
 `cakes({"flour": 500, "sugar": 200, "eggs": 1}, {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200})` 
- must return 0:
  `cakes({"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}, {"sugar": 500, "flour": 2000, "milk": 2000})`

Original link [Be careful not to review answers until you’ve completed your answer](https://www.codewars.com/kata/525c65e51bf619685c000059).

## 2. Solving the kata with TDD

### a) Setting up the repository
_The following tasks should be done by only one group member._
- Create a new repository within the organization [TechRisersWomenGroupCodingSessions](https://github.com/TechRisersWomenGroupCodingSessions).
- Clone this repo by running on your local machine by running `git clone git@github.com:TechRisersWomenGroupCodingSessions/pete_python_onboarding.git`.
- cd into the repo: `cd pete_python_onboarding` (chdir instead of cd on Windows).
- Change the remote repository to your own (instead of the one you cloned) `git remote set-url origin <YOUR_NEW_REPO>`
- Set your own repo as upstream by pushing local content to the new remote `git push -u origin main`.

_Task for the other group members_
- Now the other group members can clone the new repo your created to their local machines.




