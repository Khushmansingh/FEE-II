import { useState } from 'react'
import './Stopwatch.css'

function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [paused, setPaused] = useState(false)
  const [stopped, setStopped] = useState(true)
  const [laps, setLaps] = useState([])
  const [lapCount, setLapCount] = useState(0)
  const [timer, setTimer] = useState(null)

  function handleStart() {
    if (running === false) {
      setRunning(true)
      setPaused(false)
      setStopped(false)
      let id = setInterval(function () {
        setSeconds(function (prev) {
          return prev + 1
        })
      }, 1000)
      setTimer(id)
    }
  }

  function handleStop() {
    clearInterval(timer)
    setRunning(false)
    setPaused(false)
    setStopped(true)
  }

  function handlePause() {
    if (running === true) {
      clearInterval(timer)
      setRunning(false)
      setPaused(true)
    }
  }

  function handleResume() {
    if (paused === true) {
      setRunning(true)
      setPaused(false)
      let id = setInterval(function () {
        setSeconds(function (prev) {
          return prev + 1
        })
      }, 1000)
      setTimer(id)
    }
  }

  function handleReset() {
    clearInterval(timer)
    setSeconds(0)
    setRunning(false)
    setPaused(false)
    setStopped(true)
    setLaps([])
    setLapCount(0)
  }

  function handleLap() {
    if (running === true) {
      let newCount = lapCount + 1
      setLapCount(newCount)
      let newLap = { number: newCount, time: seconds }
      setLaps([...laps, newLap])
    }
  }

  return (
    <div className='result'>
      <h1>Stopwatch</h1>
      <h2>{seconds} seconds</h2>

      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap}>Lap</button>
      </div>

      {laps.length > 0 && (
        <div>
          <h3>Laps</h3>
          <ul>
            {laps.map(function (lap) {
              return <li>Lap {lap.number} - {lap.time} seconds</li>
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Stopwatch
