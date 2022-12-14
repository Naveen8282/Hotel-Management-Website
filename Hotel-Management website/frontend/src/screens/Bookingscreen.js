import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import Error from '../components/Error'
import moment  from 'moment'
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration:1000
});

function Bookingscreen({ match }) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [room, setroom] = useState()

    const roomid = match.params.roomid
     const fromdate= moment(match.params.fromdate , 'DD-MM-YYYY')
     const todate= moment(match.params.todate , 'DD-MM-YYYY')

     const totaldays = moment.duration(todate.diff(fromdate)).asDays()+1
    const [totalamount , settotalamount]=useState()


    useEffect(async () => {

        if(!localStorage.getItem('currentUser')){
            window.location.reload='/login'
        }

        try {
            setLoading(true);
            const data = (await axios.post('/api/rooms/getroombyid', { roomid: match.params.roomid })).data;
            settotalamount(data.rentperday*totaldays)
            setroom(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true)
        }

    }, [])

    async function bookroom(){
            const bookingDetails = {
                room ,
                userid:JSON.parse(localStorage.getItem('currentUser'))._id,
                fromdate,
                todate,
                totalamount,
                totaldays
            }
            try {
                setLoading(true)
                const result = await axios.post('/api/bookings/bookroom' , bookingDetails);
                setLoading(false)
                Swal.fire('Congratulations','Your Room Booked Successfully','success').then(result=>{
                    window.location.href='/home'
                })
            } catch (error) {
                setLoading(false)
                Swal.fire('Oops', 'Something went wrong' , 'error') 
            }
    }


    return (
        <div className='m-5' data-aos='flip-left'>

            {loading ? (<Loader />) : room ? (<div>

                <div className='row justify-content-center mt-5 bs'>
                    <div className='col-md-6'>
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className='bigimg' />
                    </div>
                    <div className='col-md-6'>
                        <div style={{ textAlign: 'right' }}>
                            <h1>Booking Details</h1>
                            <hr />
                            <b><p>Name : {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                <p>From Date : {match.params.fromdate}</p>
                                <p>To Date : {match.params.todate}</p>
                                <p>Max Count : {room.maxcount}</p></b>
                        </div>


                        <div style={{ textAlign: 'right' }}>
                            <b> <h1>Amount</h1>
                                <hr />
                                <p>Total days : {totaldays} </p>
                                <p>Rent per day :{room.rentperday}</p>
                                <p>Total Amount : {totalamount}</p></b>
                        </div>

                        <div style={{ float: 'right' }}>
                            <button className='btn btn-primary' onClick={bookroom}>BOOK ROOM</button>
                        </div>
                    </div>
                </div>

            </div>) : (<Error />)}

        </div>
    )
}

export default Bookingscreen;
