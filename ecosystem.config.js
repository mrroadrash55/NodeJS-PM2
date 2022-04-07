module.exports = {
  apps : [
    {
      "name": "node",
      "script": "/home/ec2-user/index.js",
      "output": './out.log',
      "error": './out.log',
        "log_date_format" : "YYYY-MM-DD HH:mm:ss Z",
        "env" :{
         PORT: 8080
      }
},
  {
      "name": "node1",
      "script": "/home/ec2-user/index1.js",
      "env" : {
         PORT: 3000
      }
}
]
}
