// https://medium.com/swlh/how-to-integrate-calendly-reactjs-frontend-edition-feb7ce923927
import React from 'react'
import { InlineWidget } from 'react-calendly'

const Calendly = () => {
    return (
        <InlineWidget styles={{ height: '700px' }}
            url="https://calendly.com/carcmedev/appointment"
        // pageSettings={{
        //     backgroundColor: '888888',
        //     hideEventTypeDetails: false,
        //     hideLandingPageDetails: false,
        //     primaryColor: 'ffc400',
        //     textColor: '4d5055'
        // }} 
        />
    )
}

export default Calendly