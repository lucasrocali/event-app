import light from './light'
import dark from './dark'

const spacing = {
    spacingTiny: '8px',
    spacingSmall: '12px',
    spacingMedium: '16px',
    spacingLarge: '22px'
}

const baseColors = {
    primaryColor: '#3398db'
}

export default {
    light: {
        ...light,
        ...baseColors,
        ...spacing
    },
    dark: {
        ...dark,
        ...baseColors,
        ...spacing
    },
}