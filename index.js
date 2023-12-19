import express from 'express';
import crypto from 'crypto';
import cluster from 'cluster';

const app = express();

// if(cluster.isPrimary){
//     cluster.fork();
//     cluster.fork();
//     cluster.fork();
//     cluster.fork();

// } else {
//     function doWork(durations){
//         const startDate = new Date();
//         while(new Date() - startDate < durations) {}
//     }
    
//     app.get('/', (req, res) => {
//         doWork(5000);
//         res.send('Hello World!');
//     } );

//     app.get('/fast', (req, res) => {
//         res.send('Fast response');
//     } );

//     app.listen(3000);
// }

app.get('/', (req, res)=> {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
        res.send('Hello World!')
    });
});

app.get('/fast', (req, res)=> {
    res.send('Its fast!');
});

app.listen(3000);