import { Client } from "redis-om";
import dotenv from "dotenv";

const url = process.env.REDIS_HOST || "redis://localhost:10001";
let client;
try {
  client = await new Client().open({
    host: "redis-13797.c322.us-east-1-2.ec2.cloud.redislabs.com",
    port: 13797,
    username: "default",
    password: "nnkjfEhbuLHU6ATNiTlU7gZKl1VPVq9U",
  });
  console.log("##########################################################");
  console.log("#####            REDIS STORE CONNECTED               #####");
  console.log("##########################################################\n");
} catch (err) {
  console.log(`Redis error: ${err}`.red.bold);
}

export default client;
