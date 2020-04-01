import React from 'react';
import Talk from '../scenes/Talk'

const mockScene = Component => ({ ...props }) => (
    <Component {...props} />
);

export default mockScene(Talk)