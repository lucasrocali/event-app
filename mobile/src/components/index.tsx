import React, { Component } from 'react';
import Base from './Base'
import TalkCard from './TalkCard'
import TalkDetail from './TalkDetail'
import { talks } from '../utils/mocks'

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
    }
}

export default {
    TalkDetail: Library.TalkDetail
}