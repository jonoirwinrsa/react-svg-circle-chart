import React from 'react'
import ReactDOM from 'react-dom'
import { CircleChart } from './CircleChart'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<div style={{padding: '200px'}}><CircleChart
  values={[{angle: 180, color: '#EC4C47'}, {angle: 80, color: '#5AC1F2'}]} />
</div>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
