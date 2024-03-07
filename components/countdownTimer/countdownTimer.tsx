'use client'
import React, { useState, useEffect } from 'react'

const CountDownTimer = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        const currentTime = new Date()
        const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)
  
        const days = Math.floor(timeDifference / (50 * 60 * 60 * 24))
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
  
        setTime({ days, hours, minutes, seconds })
  
        if (timeDifference === 0) {
          clearInterval(timerInterval)
          // You can add code here to handle what happens when the target date is reached.
        }
      }, 1000)
  
      return () => {
        clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
      }
    }, [])
  return (
    <section className=''>
        <div className=''>

            <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-4'>
                <StatBox label="Days" value={time.days}/>
                <StatBox label="Hours" value={time.hours}/>
                <StatBox label="Mins" value={time.minutes}/>
                <StatBox label="Secs" value={time.seconds}/>
            </div>
        </div>

    </section>
  )
}


const StatBox = ({label, value} : {label: string, value: number}) => (

    <div className='shawdow-lg rounded-lg p-4 w-48 h-32 flex flex-col justify-center items-center bg-black'>
        <h4 className='text-white text-xl'>{value}</h4>
        <p className='text-white text-xl'>{label}</p>

    </div>
)

export default CountDownTimer