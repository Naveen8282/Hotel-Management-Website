import React, { useState, useEffect } from 'react'
import axios from "axios";
import Room from '../components/Room';
import Loader from '../components/Loader';
import 'antd/dist/antd.css';
import Error from '../components/Error';
import moment from 'moment';
import { DatePicker , Space } from 'antd';

const { RangePicker } = DatePicker;

function Homescreen() {


  const [rooms, setrooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const [fromdate, setfromdate] = useState()
  const [todate, settodate] = useState()
  const [duplicaterooms, setduplicaterooms] = useState([])

  const[searchkey , setsearchkey] = useState([])
  const[type , setType] = useState()


  useEffect(async () => {
    try {
      setLoading(true)
      const data = (await axios.get('/api/rooms/getallrooms')).data

      setrooms(data)
      setduplicaterooms(data)
      setLoading(false)

    } catch (error) {
      setError(true)
      console.log(error)
      setLoading(false)
    }
  }, [])

  function filterByDate(dates) {
    setfromdate(moment(dates[0]).format('DD-MM-YYYY'))
    settodate(moment(dates[1]).format('DD-MM-YYYY'))

    var temprooms = []
    var availability = false
    for(const room of duplicaterooms) {
      if (room.currentbookings.length > 0) {

        for (const booking of room.currentbookings) {
          if (
            !moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(
              booking.fromdate,
               booking.todate
               ) && 
            !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(
              booking.fromdate,
               booking.todate
               )
               ) {

            if (
              moment(dates[0]).format('DD-MM-YYYY') != booking.fromdate &&
              moment(dates[0]).format('DD-MM-YYYY') != booking.todate &&
              moment(dates[1]).format('DD-MM-YYYY') != booking.fromdate &&
              moment(dates[1]).format('DD-MM-YYYY') != booking.todate
            ) {
              availability = true;
            }

          }
        }

      }
      if(availability == true || room.currentbookings.length==0){
        temprooms.push(room)
      }
      setrooms(temprooms)
    }
  }

  //function filterBySearch(){
  //     const temproom = duplicaterooms.filter(room=>room.name.toLowerCase().includes(searchkey.toLowerCase));
  //     setrooms(temproom)

   //}
   const filterBySearch =(event)=>{
     const searchWord = event.target.value;
     const newFilter = duplicaterooms.filter((room)=>{
         return (room.name.toLowerCase().includes(searchWord.toLowerCase()))
     });
     setrooms(newFilter)
   }

   function filterByType(e){
     setType(e)
     if(e!='all'){
      const temprooms = duplicaterooms.filter(room=>room.type.toLowerCase()==e.toLowerCase())
      setrooms(temprooms)
     }
    else{
      setrooms(duplicaterooms)
    }
   }

  return (
    <div className='container'>

      <div className='row mt-5 bs'>
        <div className='col-md-3 mt-2'>
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
        </div>

        <div className='col-md-5'>
          <input type="text" className='form-control' placeholder='search rooms'
            value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} onKeyUp={filterBySearch} />
        </div>
        <div className='col-md-3'>
        <select className='form-control' value={type} onChange={(e)=>{filterByType(e.target.value)}}>
          <option value='all'>All</option>
          <option value='delux'>Delux</option>
          <option value='non-delux'>Non-Delux</option>
        </select>
        </div>
       
      </div>

      <div className='row justify-content-center mt-5'>
        {loading ? (
          <Loader />
        ) : (
          rooms.map((room) => {
            return <div className='col-md-9 mt-2'>
              <Room room={room} fromdate={fromdate} todate={todate} />
            </div>;
          })
        )
        }
      </div>
    </div>
  );
}

export default Homescreen;
