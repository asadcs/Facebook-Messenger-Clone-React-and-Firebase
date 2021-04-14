import React from 'react'

export default function Message(props) {
const{key,message}=props

    return (
        <h2 key={key}>{message}</h2>
    )
}
