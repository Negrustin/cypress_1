# Test Execution Guide
To execute tests with different configurations, the following commands are available:

### Run tests on a laptop (in headless mode):
```
npm run cy:laptop:headless:chrome
npm run cy:laptop:headless:firefox
```
### Run tests on a mobile device (in headless mode):
```
npm run cy:mobile:headless:chrome
npm run cy:mobile:headless:firefox
```
### Run tests on a laptop (in headed mode):
```
npm run cy:laptop:headed
```
### Run tests on a mobile device (in headed mode):
```
npm run cy:mobile:headed
```
#### You can also use additional parameters when executing the tests. For instance, if you want to run tests with the data of a second user, you can include the following parameter:
```
--env accountName=test_user_2
```
#### To run the tests with this parameter, append it to the desired command. For example:
```
npm run cy:laptop:headless:chrome -- --env accountName=test_user_2
```



