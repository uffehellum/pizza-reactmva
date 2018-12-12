import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.Suggests.Txt}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions