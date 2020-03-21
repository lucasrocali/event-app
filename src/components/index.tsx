import React, { Component } from 'react';
import Base from './Base'
import TalkCard from './TalkCard'
import { talks } from '../utils/constants'

const Library = {
    Base: {
        states: {
            default: <Base />,
            default2: <Base />
        }
    },
    TalkCard: {
        states: {
            awesome: <TalkCard talk={talks.awesome} />,
            largeTitle: <TalkCard talk={talks.largeTitle} />
        }
    }
}

export default {
    TalkCard: Library.TalkCard
}