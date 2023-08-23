const http = require('http');
const fs = require('fs');

const routes = ((req, res) => {
    if (req.url === '/') {
        formReq(req, res)
    } else if (req.url === '/username') {
        formResp(req, res);
    }
});

const formResp = (req, res) => {
    // console.log(req, 'reqreq');
    res.setHeader('Content-Type', 'text/html');
    const body = [];
    req.on('data', (data) => {
        body.push(data);
    });

    req.on('end', (data) => {
        // console.log(body);  // logs buffer data
        console.log(Buffer.concat(body).toString());
        // fs.writeFileSync(`file ${Math.random()}.txt` , Buffer.concat(body).toString());

        // fs.writeFile(`file ${Math.random()}.txt` , Buffer.concat(body).toString() , () =>{
        //     res.statusCode = 302;
        //     res.setHeader('Location', '/');
        //     return res.end();
        // });  // comment blow section

    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
    // res.end(`<div>Haiiiiiiiiiiiiiii............</div>`);
}

const formReq = (req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    //  res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    res.end(`
     <!doctype html>
     <html>
       <head>Header Here</head>
       <body>
         <form action='/username' method='post'>
           <label>Name</label>
           <input type='text' name='username' />
           <input type='submit' value='send' />
         </form>
       </body>
     </html>
    `);
}

let add = (a, b) => {
    return a + b;
};


module.exports = routes ; // {routes : routes} ;