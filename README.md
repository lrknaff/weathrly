---
title: weathrly
---

# Context

It's important to know what Mother Nature is going to throw at you each day -- what if you wear flip flops because it's sunny and 65 degrees in the morning and then it snows all afternoon (this is Colorado, after all).

As web developers you're going to be living in the context of the web. With this next project you will be interacting with a web-api. Ultimately this is going to be a preview for what the real world is going to look like for most of you. Data is important and thats what the API provides. As a web-developer you will be giving value to that data by visualizing and organizing that data for your user base.

In this project you will be getting your first real interactions with ReactJS, asynchronous javascript, and managing the state of your application.

## Required Technology

- ReactJS
- jQuery for AJAX only (No DOM manipulation)
- Sass

## Phase one

* Your application should have a welcome page that greets the user. The welcome page has an input field that asks the user for it's  current location / desired location

* Once the desired location is submitted a weekly forecast overview (morning/evening for 7 days) is shown.

* There should be a way for the user to change location information. Once the location information is changed the weather should reflect the desired location.

* utilize sass variables and color scheme of app changes based on the weather and temp.

* location persists after refresh.


## Phase two

* Display likely-hood of weather event happening

* Each day should have a summary of what the weather will look like ex: `Today: Sunny Today, It's currently 42, the high will be 46`

* Application should handle when a user searches for a location that is not found by the API. Team should research different ways to handle unfound locations by looking around on different weather and other location searching applications and implement a solution for their project that they find intuitive.



## Phase three

* Application should render an image that best reflects the weather.

* Have an alert if an extreme weather event is forecasted in the area the user has specified (tornado watch, flood watch, blizzard watch, etc).

## Extension

* If a user clicks on a specific day on the 7 day forecast the application should display an hourly breakdown of the forecasted weather for a 24-hour period.

# Instructor Evaluation Points

## Specification Adherence

4 - The application meets all of the requirements listed above and implements one or more of the extensions.

3 - The application consists of one page with all of the major functionality being provided by jQuery. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use.

2 - The application is in a usable state, but is missing 1 or more of the features outline in the specification above.

1 - The application is missing 3 or more smaller features or 1 major feature essential to having a complete application.

0 - The application is unusable.

## Accessibility

4 - The application demonstrates an exceptional knowledge of web accessibility. The application has no aXe-core violations, is fully functional without using a mouse, and the application uses HTML/CSS to 'chunk' content into more manageable pieces. The application utilizes semantic HTML.

3 - The application has a strong accessibility presence. The developer showed a strong effort to keep accessibility in mind from the beginning of the project. The application has 0-3 aXe-core violations.

2 - The application shows glimpses of good accessibility practices, but fails to deliver a truly accessible product. The application has 4-6 aXe-core violations

1- Developer did not keep accessibility in mind. The application has 6+ aXe-core violations.

## User Interface

4 - The application is pleasant, logical, and easy to use. The application is fully responsive, and has clearly had special consideration around usability on devices. There no holes in functionality and the application stands on it own to be used by the instructor without guidance from the developer.

3 - The application has many strong pages/interactions, but a few holes in lesser-used functionality. The application less than 3 aXe-core violations

2 - The application shows effort in the interface, but the result is not effective. The evaluator has some difficulty using the application when reviewing the features in the user stories.

1 - The application is confusing or difficult to use.

## HTML Style

4: Developer is able to craft HTML that is semantically correct and clearly organized. There are zero instances where an instructor would recommend taking a different approach. Developer writes markup that is exceptionally clear and well-factored. Application is expertly organized and logically structured with with a clear, thoughtful use of tags and selectors.

3: Developer solves structural problems with a balance between conciseness and clarity. Developer can speak to choices made in the code and knows what every line of code and every tag and selector is doing.

2: Developer writes effective HTML, but does not write semantically correct and clearly organized code. Application shows some effort to use semantically correct HTML, but the divisions are inconsistent or unclear. There are many un-semantic tags and unnecessary selectors and it is not clear to the evaluator what a given section of code represents visually. Developer cannot speak to every line of code.

1: Developer writes code with unnecessary tags, selectors, or nesting which do not increase clarity. Developer writes code that is difficult to understand. Application markup shows poor structure with no understanding of semantics.

## CSS/Sass Style

4: Application has exceptionally well-factored CSS/Sass with little or no duplication and all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.

3: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of CSS/Sass is doing.

2: Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.

1: Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of CSS/Sass is doing. Developer writes code with unnecessary selectors or tags which do not increase clarity.

## JavaScript Style

4 - Application has exceptionally well-factored code with little or no duplication and all components separated out into logical components. There zero instances where an instructor would recommend taking a different approach.

3- Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of code is doing.

2 - Your application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.

1 - Your application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of code is doing.

0 - Your client-side application does not function or the application does not make use of localStorage for updating information on the client. Developer writes code with unnecessary variables, operations, or steps which do not increase clarity.

## Testing

4 - Project has a running test suite that exercises the application at multiple levels (feature and unit). The test suite covers almost all aspects of the application.

3 - Project has a running test suite that tests and multiple levels but fails to cover some features. All functionality is covered by tests. The application makes some use of feature testing.

2 - Project has sporadic use of tests and multiple levels. The application contains numerous holes in testing and/or many features are untested.

1 - There is little or no evidence of testing in this application.

## Workflow

4 - The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application.

3 - The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.

2 - The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.

1 - The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.

0 - The application was not checked into version control.

## Code Sanitation

The output from a code sanitizer (either JSHint or ESLint) shows…

4 - Zero complaints

3 - Five or fewer complaints

2 - Six to ten complaints

1 - More than ten complaints
