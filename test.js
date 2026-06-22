const express = require('express');

// Basic test server setup on port 5000

const options = {
    hostname: "localhost",
    port: 5000,
    path: "/",
    method: 'GET'
}
xx

app.get('/', (req, res) => {
res.status(200).send('OK');
});

const server = app.listen(5000, () => {
    console.log('Smoke test running...');
    const req = http.get(options, (res) =>{
        if(res.statusCode === 200){
            console.log("Smoke Test Passed")
            process.exit(0);
        }
        else{
            console.error(`Smoke Test failed with error code: ${res.statusCode}`)
            process.exit(1)
        }
    })
    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`)
        process.exit(1)
    })
    req.end()
})