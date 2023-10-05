import { createTheme } from '@mui/material'

export const globalTheme = createTheme({
   palette: {
      primary: {
         main: '#8639B5',
         aliceBlue: '#F7F8FA',
         light: '#FFFFFF',
         dark: '#020202',
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
      h1: {
         fontSize: '3.375rem',
         fontWeight: '500',
      },
      h2: {
         fontSize: '2.875rem',
         fontWeight: '500',
      },
      h3: {
         fontSize: '1.5rem',
         fontWeight: '500',
      },
      h4: {
         fontSize: '1.25rem',
         fontWeight: '500',
      },
      h5: {
         fontSize: '1.125rem',
         fontWeight: '500',
      },
      body1: {
         fontSize: '1rem',
         fontWeight: '400',
      },
      body2: {
         fontSize: '0.875rem',
         fontWeight: '400',
      },
      subtitle1: {
         fontSize: '0.75rem',
         fontWeight: '400',
      },
   },
})
