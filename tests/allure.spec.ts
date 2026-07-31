
// Allure report in playwright, installtion, dependencies and structure
/*
 playwright inbuilts report are: 
 list, line, dot, html, blob

 Allure report: Advance report when compared to all reports 
Third party dependencies 

Step wise process:: 
1. install the allure report from terminal 
    npm install --save-dev allure-commandline
2. After command line is installed , we need to install allure playwright
    npm install --save-dev allure-playwright

3. Add allure-playwright reports inside the config file. 
 Allure folder will not be created or we do not need to create it manually 
 Once any testcase has been completed allure-results folder will be automatically created. 

 // Run the testcase and wait for complete execution 
 now run the below command to check the reports: 
 npx allure serve allure-results

 // to check the trend and allure historical result run the  below command 
 npx allure generate allure-results --clean -o allure-report

 expand the allure-report and copy history tab and paste it inside the allure results
  run the testcase again and again 

  in order to send the reports to the line manager: 
  From folder compress the allure result and send it over email. 
  In email you want other people to look into highlevel details 
   capture the screenshot of Allure overview page and attach with email 

*/