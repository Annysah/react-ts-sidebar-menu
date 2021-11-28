import React from 'react'
import styled from 'styled-components'

const TaskText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Tasks: React.FunctionComponent = () => {
    return (
        <TaskText>Tasks</TaskText>
    )
}

export default Tasks
