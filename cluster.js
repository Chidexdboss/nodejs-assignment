//cluster: To split a single Node process into multiple processes
//Run the code three times, the first time is as a master, then as workers
var cluster = require('cluster');
if (cluster.isWorker) {
  console.log('I am a worker');
} else {
  console.log('I am a master');
  cluster.fork();
  cluster.fork();
      }

