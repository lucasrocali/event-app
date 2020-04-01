import React from 'react';
import TalkList from '../scenes/TalkList'
import { talks, days } from '../utils/mocks';

const mockScene = Component => ({ ...props }) => (
    <Component
        {...props}
        talks={[talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome, talks.awesome, talks.largeTitle, talks.awesome]}
        days={days}
    />
);

export default mockScene(TalkList)