import React from 'react'
import styled from 'styled-components'

const TeamText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Team: React.FunctionComponent = () => {
    return (
        <TeamText>Team</TeamText>
    )
}

export default Team
