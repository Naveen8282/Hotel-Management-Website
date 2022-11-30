import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd';
import axios from 'axios';
import Loader from '../components/Loader'
import Error from '../components/Error'
import Swal from 'sweetalert2'
import { Tag, Divider } from 'antd';
const { TabPane } = Tabs;

function Profilescreen() {

    const user = JSON.parse(localStorage.getItem('currentUser'))

    useEffect(() => {
        if (!user) {
            window.location.href = '/login'
        }
    }, [])


    return (
        <div className='ml-3 mt-3 '>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <div className='bs'>
                    <h1>My Profile</h1>
                    <br />
                    <p><b>Name :</b> {user.name}</p>
                    <p><b>Email :</b> {user.email}</p>
                    <p><b>isAdmin :</b> {user.isAdmin ? 'YES' : 'NO'}</p>
                    </div>
                </TabPane>
                <TabPane tab="Bookings" key="2">
                    <MyBookings />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Profilescreen


export function MyBookings() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const [bookings, setbookings] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(async () => {
        try {
            setLoading(true)
            const data = await (await axios.post('/api/bookings/getbookingsbyuserid', { userid: user._id })).data
            setbookings(data)
            setLoading(false)
        } catch (error) {
           // console.log(error)
            setLoading(false)
            setError(error)
        }

    }, [])

    async function cancelBooking(bookingid, roomid) {

        try {
            setLoading(true)
            const result = await (await axios.post("/api/bookings/cancelbooking",  {bookingid, roomid} )).data
            console.log(result)
            setLoading(false)
            Swal.fire('Oops', 'Something went wrong', 'error')
        } catch (e) {        
            setLoading(false)
            Swal.fire('congrats', 'Your booking is cancelled', 'success').then(result => {
            window.location.reload()
               }) 
        }

    }

    return (
        <div className='row'>
            <div className='col-md-6'>

                {loading && (<Loader />)}
                {bookings && (bookings.map(booking => {

                    return <div className='bs'>
                        <h1>{booking.room}</h1>
                        <p><b>BookingId</b> : {booking._id}</p>
                        <p><b>CheckIn</b> : {booking.fromdate}</p>
                        <p><b>CheckOut</b> : {booking.todate}</p>
                        <p><b>Amount</b> : {booking.totalamount}</p>
                        <p><b>Status</b> : {booking.status=='cancelled' ? (<Tag color="red">CANCELLED</Tag>) : (<Tag color="green">CONFIRMED</Tag>) }</p>

                        {booking.status!=='cancelled' && (<div className='text-right'>
                            <button class='btn btn-primary' onClick={() => { cancelBooking(booking._id, booking.roomid) }}>CANCEL BOOKING</button>
                        </div>)}

                        {/* <div className='text-right'>
                            <button class='btn btn-primary' onClick={() => { cancelBooking(booking._id, booking.roomid) }}>CANCEL BOOKING</button>
                        </div> */}

                    </div>

                }))}

            </div>
        </div>
    )
}
