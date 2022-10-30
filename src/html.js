import React from 'react'

const HTML = (props) => {
  return (
    <html lang="en">
      <head>
        {props.headComponents}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{__html: props.body}} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default HTML
