### Resources

Автоматизация тестирования на JavaScript + webdriverIO (Vadym Morozov)
https://www.youtube.com/playlist?list=PLP1-M5OhC7yjAZ1-llDH45nxLfKKbcxGe

### Tasks

##### Task 1 (features/signup/signup.feature)

1. go to github
2. click Sign up button
3. register by providing username, email, and password
4. check that you are redircted to github.com/join
5. check there is a label with text "Verify your account"

##### Task 2 (does not exist)

1. go to github
2. scroll down and check register by providing username, email, and password then click Sign up for GitHub button
3. do as Task 1 steps 3 & 4

##### Task 3 (features/auth/login.feature)

1. go to github
2. click Sign in the top right corner
3. type your username/email and password and then click Sign in
4. check if it will redirect you to your profile

##### Task 4 (features/reset-password/reset.feature)

1. go to github
2. click Sign in the top right corner
3. click "Forgot password"
4. you have 2 test cases
   4.1 negative, invalid email (empty email, incorrect format)
   4.2 positive, valid email

##### Task 5 (features/dropdown/dropdown.feature)

1. go to github
2. go to the top left menu items and mouse hover every item
3. check every item have drop down menu

##### Task 6 (features/pricing/pricing.feature)

1. go to github
2. go to the top left menu items and click Pricing then Plans
3. scroll down and click on "Join for free"
4. it will redirect to "Create your account"
5. type Username, Email address, Password, and all other fields

##### Task 7 (features/explore/explore.feature)

1. go to github
2. click explore menu, then "Explore GitHut"
3. go to Topics tab
4. check if "Topics Browse popular topics on GitHub." banner exist

##### Task 8 (features/search/search.feature)

1. go to github
2. go to search box and type webdriverio and press enter
3. go to the Language left side bar and click TypeScript
4. click the first result "igniteram/appium-webdriverio-typescript"
5. check the address of the page address link contains the word "webdriverio"

##### Task 9 (features/enterprise/enterprise.feature)

1. go to github
2. go to "Get started with GitHub Enterprise" banner
3. click "Start a free trial" button, then you will be redirected to another page
4. click "Enterprise Cloud" banner, then you will be redirected to another page
5. type Username, Email address, Password, and all other fields

##### Task 10 (features/enterprise/enterprise.feature)

1. go to github
2. go to "Get started with GitHub Enterprise" banner
3. click "Start a free trial" button, then you will be redirected to another page
4. click "Enterprise Server" banner, then you will be redirected to another page
5. type Name, Company, Work email, Phone number, Choose your installation type, Do you have any other questions about GitHub Enterprise?, Accept terms of use, Verify you're not a robot and click on "Get Started" button

##### Task 11 (features/career/career.feature)

1. go to github
2. scroll down and click on Careers
3. click on Open positions
4. output all Open positions in console

### Remarks

1.

### Points to Consider

1. Project structure
2. WebdriverIO best practices
3. Cucumber Best Practices
4. Parallel Testing
5. Design Patterns for Scalable Test Automation

### Official W3C list of supported selector types:

https://w3c.github.io/webdriver/#locator-strategies

1. CSS selector
2. Link text selector
3. Partial link text selector
4. Tag name
5. XPath selector

### 4 ways to interact with the value of text fields:

1. addValue
2. setValue
3. clearValue
4. getValue

### 5 commands built for keep an eye on the page and reacted to its updates

1. waitForExist
2. waitForEnabled
3. waitForDisplayed
4. waitForClickable
5. waitUntil

### 4 "alert" related commands

1. dismissAlert
2. acceptAlert
3. getAlertText
4. sendAlertText
