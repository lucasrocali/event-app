import light from './light'
import dark from './dark'

const spacing = {
    spacingTiny: '8px',
    spacingSmall: '12px',
    spacingMedium: '16px',
    spacingLarge: '22px'
}

export default {
    light: {
        ...light,
        ...spacing
    },
    dark: {
        ...dark,
        ...spacing
    },
}