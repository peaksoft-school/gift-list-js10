import { createTheme } from '@mui/material'

export const globalTheme = createTheme({
   palette: {
      primary: {
         main: '#8639B5',
         aliceBlue: '#F7F8FA',
         white: '#FFFFFF',
         black: '#020202',
      },
      secondary: {
         main: '#8D949E',
         silver: '#BDBDBD',
         waikawaGrey: '#636C84',
         green: '#0BA360',
         orange: '#FD5200',
      },
      linear: {
         purple: 'linear-gradient(#8639B5, #092056)',
         pink: 'linear-gradient(#FA2B56, #F91C3D)',
         green: 'linear-gradient(0.25turn, #0BA360, #3CBA92)',
      },
   },
   typography: {
      fontFamily: `'Inter', sans-serif`,
   },
})
