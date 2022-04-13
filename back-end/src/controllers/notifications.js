const fake = require('../fake');
const mongoose = require('mongoose');
const Notification = mongoose.model('Notification', Notification);

const notifications = fake.fakeNotifications;
const faker = require('faker');

module.exports = {
  get: async (req, res) => {
    const notifs = await Notification.find()
    res.send(notifs);
  },
  
  post: async (req, res) => {
    const notification = new Notification({
      id: faker.datatype.uuid(),
      title: req.body.title,
      user: req.body.user,
      date: req.body.date,
    });
    await notification.save();
    res.status(201).send(notification);
  },
  
  getById: async (req, res) => {
    const notification = await Notification.find({id: req.params.notificationID});
    if (notification) {
      res.send(notification);
    } else {
      res.status(404).send('Notification not found');
    }
  },
  
  put: async (req, res) => {
    const notification = await Notification.find({id: req.params.notificationID});
  
    if (req.body.title) {
      notification.title = req.body.title;
      await notification.save();
    }
    if (req.body.date) {
      notification.date = req.body.date;
      await notification.save();

    }
    if (req.body.seen) {
      notification.seen = req.body.seen;
      await notification.save();
    }
    res.send(notification);
  },
  
  delete: async (req, res) => {
    const notification = await Notification.find({id: req.params.notificationID});
  
    if (notification) {
      await Notification.deleteOne({user: {id: req.params.userID}});
      res.status(204).send('Notification deleted');
    } else {
      res.status(404).send('Notification not found');
    }
  },
};