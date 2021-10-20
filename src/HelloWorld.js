import React from 'react'
import HelloName from './HelloName'

export default function HelloWorld({names}) {
    return (
      names.map(name => {
          return <HelloName name={name} />
      })
    );
}