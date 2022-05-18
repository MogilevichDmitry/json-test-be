const express = require('express')
const app = express()
const port = 3000

app.get('/test1', (req, res) => {
  res.send('Hello World!');
})

app.get('/test2', (req, res) => {
  res.json([]);
})

app.get('/test3', (req, res) => {
  res.json({});
})

app.get('/test4', (req, res) => {
  res.json({ status: 'ok', value: 1 });
})

app.get('/test5', (req, res) => {
  res.json({"statusCode":400,"body":"\"Invalid user\""});
})

app.get('/test6', (req, res) => {
  res.json({"status":"ok","min_version":"1.0.4","max_version":"1.0.4", "json": "{\"statusMap\":{\"0\":\"Draft\",\"1\":\"Action Required - Design Your Billboard & Add Payment Method\",\"2\":\"Action Required- Design Your Billboard\",\"3\":\"Action Required - Add Payment Method\",\"4\":\"Pending Art Proof\",\"5\":\"Action Required - Art Proof Approval\",\"6\":\"Art Proof Rejected\",\"7\":\"Pending Location Approval\",\"8\":\"Location Rejected\",\"9\":\"Billboard Production In Progress\",\"10\":\"Scheduled for Billboard Installation\",\"11\":\"Out for Installation\",\"12\":\"Billboard Installed\",\"13\":\"Payment Failed\"}}" });
})

app.get('/test7', (req, res) => {
  res.status(500).send({ error: 'Error' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})