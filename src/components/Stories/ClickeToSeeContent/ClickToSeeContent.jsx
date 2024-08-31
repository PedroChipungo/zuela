import React from 'react'
import { useParams } from 'react-router-dom'

const ClickToSeeContent = (title, content) => {
    const {contentName} = useParams()
    console.log(title, content)
  return (
    <div>
      
    </div>
  )
}

export default ClickToSeeContent
