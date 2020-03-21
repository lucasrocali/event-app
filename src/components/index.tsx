import React, { Component } from 'react';
import Base from './Base'

const Library = {
    Base: {
        states: {
            default: <Base />,
            default2: <Base />
        }
    }
}

export default {
    Base: Library.Base
}