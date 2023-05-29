# Test Execution Guide

To execute tests with different configurations, the following commands are available:
`Run tests on desktop (headless)``
npm run test:desktop:headless

Run tests on mobile device (headless)
`npm run test:mobile:headless`

Run tests on desktop in Chrome browser
`npm run test:desktop:chrome`

Run tests on mobile device in Chrome browser
`npm run test:mobile:chrome`

Run tests on desktop in Firefox browser
`npm run test:desktop:firefox`

Run tests on mobile device in Firefox browser
`npm run test:mobile:firefox`

You can also use additional parameters when executing the tests. For example, if you want to run tests with the data of a second user, you can include the following parameter:

`--env accountName=test_user_2`

To run the tests with this parameter, append it to the desired command. For instance:

`npm run test:desktop:headless --env accountName=test_user_2`
