import app from "./app";

app.init()
    .then(() => {
        app.listen();
        console.log("Boot succesfull");
    })
    .catch((error) => {
        console.log("Booting failure");
        process.exit(1);
    })
