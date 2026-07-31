// Hooks in playwright: 

/*

Hooks is nothing but special method that perform setup and tear down process. 

.. Different types of Hooks in playwright: 
There are 4 type of hooks in playwright: 

1. test.beforeAll()-- it will get executed before all the testcase executes. 
    ex: db connection, logs

2. *** test.beforeEach()-- it will run once before running each and every testcases. 
    if you have 10 testcase then before every testcase this method will get executed. 
    Ex; precondition


3. test.afterEach()-- it will run once before after running  each and every testcase. 
    ex: logout(this is optional)

4. test.afterAll() -- it will be executed once after executing all the testcase
    ex: report generation, closing of DB

    #2 will be heavly used. 
1 2 3 4

*/

import {test} from '@playwright/test'

// execution flow >> before All >> before each >> after each >> after all



test.beforeEach(async()=>{
    console.log('before each');
})
test.afterEach(async()=>{
console.log('after each');

})

test.afterAll(async()=>{
    console.log('after all ');
})
test.beforeAll(async()=>{
     console.log('before all');
})

test('test 1', async()=>{
    console.log('testcase 1');
})
test('test 2', async()=>{
    console.log('testcase 2');
})
test('test 3', async()=>{
    console.log('testcase 3');
})