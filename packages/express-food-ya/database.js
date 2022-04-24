const mongoose = require('mongoose');

exports.connect = ({ url }, options = {}) => {
    const dbUrl = url;
  
    mongoose.connect(dbUrl, options);
  
    mongoose.connection.on('open', () => {
        console.log('MongoDB connected');
    });
    
    mongoose.connection.on('close', () => {
        console.log('MongoDB disconnected: mongoose default connection closed');
    });
    
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB connection error:', err);
    });
  
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('MongoDB disconnected: app termination');
        process.exit(0);
      });
    });
  }
  
  exports.disconnect = () => {
    mongoose.connection.close(() => {
        console.log('MongoDB disconnected');
    });
  }