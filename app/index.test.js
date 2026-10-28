const { getStatus } = require("./index");

if (getStatus() !== "healthy") {
  console.error("Application validation failed");
  process.exit(1);
}

console.log("Application validation passed");
