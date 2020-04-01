import light from './light'
import dark from './dark'

const spacing = {
    tiny: '8px',
    small: '12px',
    medium: '16px',
    large: '22px'
}

const baseColors = {
    primary: '#3398db'
}

export default {
    light: {
        color: {
            ...light,
            ...baseColors,
        },
        spacing
    },
    dark: {
        color: {
            ...dark,
            ...baseColors,
        },
        spacing
    },
}