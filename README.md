### u-bus project

- p2p info bus

运行 `npm start`
测试 `npm test`
代码测试覆盖率 `npm run test-cov`


----

init db;
    
    use u-bus-dev;
    db.buses.insert({ "_id" : ObjectId("56f6282d8e2445f535e976da"), "busId" : "gz-1", "name" : "1号线", "routers" : [ "从化", "太平", "广州" ] });