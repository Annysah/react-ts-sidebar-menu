import React from 'react'
import styled from 'styled-components'

const AnalyticsText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Analytics: React.FunctionComponent = () => {
    return (
        <AnalyticsText>Analytics</AnalyticsText>
    )
}

export default Analytics
