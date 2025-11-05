import React from 'react'

const IdPage = async ({ params }) => {
    let {id} = await params
    
  return (
      <div>
      <h1>Hello :- {id}</h1>
      </div>
  )
}

export default IdPage