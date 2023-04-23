const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'meda-db';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(async (err) => {
  if (err) throw err;

  console.log('Connected successfully to MongoDB server');
  const db = client.db(dbName);

  // Define API routes here
  app.post('/api/submit-typeform-data', async (req, res) => {
    // Here, you'll process the Typeform submission data and store it in the MongoDB database
  });

  app.post('/api/update-payroll-details', async (req, res) => {
    // Here, you'll update the payroll details in the MongoDB database
  });

  // Start the Express server
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
app.post('/api/submit-typeform-data', async (req, res) => {
    // Process the Typeform submission data
    const employeeData = req.body;
  
    // Store the employee data in the MongoDB database
    const employeesCollection = db.collection('employees');
    await employeesCollection.insertOne(employeeData);
  
    // Send a response to the client
    res.status(201).json({ message: 'Employee data successfully added' });
  });
  app.post('/api/update-payroll-details', async (req, res) => {
    // Update the payroll details in the MongoDB database
    const payrollData = req.body;
    const { employeeId, ...updateFields } = payrollData;
  
    const employeesCollection = db.collection('employees');
    await employeesCollection.updateOne({ _id: employeeId }, { $set: updateFields });
  
    // Send a response to the client
    res.status(200).json({ message: 'Payroll details successfully updated' });
  });
  async function submitTypeformData(data) {
    const response = await fetch('/api/submit-typeform-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) throw new Error('Error submitting Typeform data');
    return await response.json();
  }
  
  async function updatePayrollDetails(data) {
    const response = await fetch('/api/update-payroll-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) throw new Error('Error updating payroll details');
    return await response.json();
  }
  const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
app.use(serveStatic(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
