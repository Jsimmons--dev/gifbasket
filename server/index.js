const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json());
const port = 3000
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('../k.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

app.post('/mark-timestamp', async (req, res) => {
    const { id } = req.body;

    res.json({ 'success': true })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})