import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [n, setN] = useState(0)
  const count = useRef(0)
  const onClick = () => setN(n => n + 8)

  useEffect(() => {
    count.current += 1
    console.log(`执行了 ${count.current} 次`)
  })

  return (
    <div>
      n: {n}
      <button onClick={onClick}>n+1</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
