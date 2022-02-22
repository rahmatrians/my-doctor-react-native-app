const mainColors = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495A75',
    dark3: '#8092AF',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    grey3: '#EDEEF0',
    blue1: '#0066CB'
};

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    white: 'white',
    black: 'black',
    disable: mainColors.grey3,
    tertiary: mainColors.blue1,
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        menuInactive: mainColors.dark2,
        menuActive: mainColors.green1,
        subTitle: mainColors.dark3,
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: 'white'
        },
        secondary: {
            background: 'white',
            text: mainColors.dark1
        }
    },
    border: mainColors.grey2,
    cardLight: mainColors.green2,
}