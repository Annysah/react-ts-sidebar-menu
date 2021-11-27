import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Team',
        path: '/team',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'Chats',
        path: '/chats',
        icon: <FaIcons.FaRocketchat />
    },
    {
        title: 'Analytics',
        path: '/analytics',
        icon: <FaIcons.FaRegChartBar />
    }
]

