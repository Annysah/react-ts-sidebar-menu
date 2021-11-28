import React from 'react'
import styled from 'styled-components'

const ChatText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`


const Chats: React.FunctionComponent = () => {
    return (
        <ChatText>Chats</ChatText>
    )
}

export default Chats
