const { Router } = require('express');
const {getActivities}= require('./controllers/getTour')

const activities = Router();

activities.get('/activityget', getActivities );

module.exports = {
    activities
}
