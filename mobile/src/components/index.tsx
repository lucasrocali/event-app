import React, { Component } from 'react';
import Base from './Base'
import TalkCard from './TalkCard'
import TalkDetail from './TalkDetail'
import DayToggle from './DayToggle'
import { talks, days } from '../utils/mocks'

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
    },
    TalkDetail: {
        states: {
            awesome: <TalkDetail talk={talks.awesome} />,
            largeTitle: <TalkDetail talk={talks.largeTitle} />
        }
    },
    DayToggle: {
        states: {
            default2: <DayToggle days={days} selectedDay={days[0]} />,
            default3: <DayToggle days={[...days, days[1]]} selectedDay={days[0]} />
        }
    }
}

export default {
    DayToggle: Library.DayToggle
}