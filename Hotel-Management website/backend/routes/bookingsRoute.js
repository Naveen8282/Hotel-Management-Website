const express = require('express');
const router = express.Router();
const Booking = require("../models/booking")
const moment = require("moment");
const Room = require("../models/room")

router.post("/bookroom", async (req, res) => {

    const { room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays } = req.body


    try {
        const newbooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate: moment(fromdate).format('DD-MM-YYYY'),
            todate: moment(todate).format('DD-MM-YYYY'),
            totalamount,
            totaldays,
        })

        const booking = await newbooking.save()

        const roomtemp = await Room.findOne({ _id: room._id })
        roomtemp.currentbookings.push({
            bookingid: booking._id,
            fromdate: moment(fromdate).format('DD-MM-YYYY'),
            todate: moment(todate).format('DD-MM-YYYY'),
            userid: userid,
            status: booking.status
        });

        await roomtemp.save()

        res.send('Room Booked successfully')

    } catch (error) {
        return res.status(400).json({ error })
    }
});

router.post('/getbookingsbyuserid', async (req, res) => {
    const userid = req.body.userid
    try {
        const bookings = await Booking.find({ userid: userid })
        res.send(bookings)
    } catch (error) {
        return res.status(200).json({ error })
    }
});

router.post('/cancelbooking', async (req, res) => {

    const { bookingid, roomid } = req.body
    try {
        const bookingitem = await Booking.findOne({ _id: bookingid })
        bookingitem.status = 'cancelled'
        await bookingitem.save()
        const room = await Room.findOne({ _id: roomid })
        const bookings = room.currentbookings
        const temp = bookings.filter(bk = bk.bookingid.toString() !== bookingid)
        room.currentbookings = temp
        await room.save()
        res.send('Booking cancelled successfully')
    } catch (error) {
        return res.status(400).json({ error })
    }

});

router.get('/getallbookings', async(req,res)=>{

    try {
        const bookings = await Booking.find()
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error })
    }

})

module.exports = router