import mongoose  from "mongoose";
import {} from "dotenv/config";

const urlCloud = process.env.MONGODB_URI_CLOUD;
const urlSelfHosted = process.env.MONGODB_URI_SELF_HOSTED;

const url = urlCloud;

const connectionMongodb = mongoose.connect(url)
.then((res) => {
    console.log('MONGODB Connection to the database established');
    return true
})
.catch((err) => {
    return {message: "MONGODB Error connecting to the database"}
});

export { connectionMongodb };