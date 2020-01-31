import React from 'react'
import Nav from './nav'

export default (props) => (
    <>
        <Nav />
        <div>
            {props.children}
        </div>
    </>
)