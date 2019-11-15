class Calculator {
  constructor(a) {
    this.a = a;
  }
  return() {
    return this;
  }
  add(c) {
    this.a = this.a + c;
    return this;
  }
  subtract(b) {
    this.a = this.a - b;
    return this;
  }
  multiply(b) {
    this.a = this.a * b;
    return this;
  }
  divide(b) {
    this.a = this.a / b;
    return this;
  }
  clear() {
    this.a = 0;
    return this;
  }
  equals() {
    return this.a;
  }
}

const http = require("http");
const port = 3000;
const requestHandler = (req, res) => {
  let cal;
  const urlmath = req.url.split("'");
  const problem = urlmath[1];
  console.log(problem);
  const splitprob = problem.split("");
  console.log(splitprob);
  const a = parseInt(splitprob[0]);
  const b = parseInt(splitprob[2]);
  const op = splitprob[1];
  switch (op) {
    case "+":
      cal = new Calculator(a).add(b);
      console.log(cal);
      return cal;
    case "-":
      cal = new Calculator(a).subtract(b);
      console.log(cal);
      return cal;
    case "*":
      cal = new Calculator(a).multiply(b);
      console.log(cal);
      return cal;
    case "/":
      cal = new Calculator(a).divide(b);
      console.log(cal);
      return cal;
    default:
      console.log("default");
  }
  console.log(a);
  console.log(b);
  console.log(op);
  res.statusCode = 200;
  // res.write(Calculator.a);
  res.write(cal); //split the / off the url
  //split the url into 3 diff strings, switch case on operator to operate on param 1 and 2
};

const server = http.createServer(requestHandler);

const data = [1, 2, 3];
const options = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
};

server.listen(port, err => {
  if (err) {
    throw err;
  }
  console.log("server listening on port" + port);
});

const req = http.request(options, res => {
  res.on("data", d => {
    process.stdout.write(d);
  });
});
req.on("error", err => {
  throw err;
});
