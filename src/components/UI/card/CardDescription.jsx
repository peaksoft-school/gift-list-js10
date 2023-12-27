import { styled } from '@mui/material'
import { globalTheme } from '../../../theme/globalTheme'

export const CardDescription = ({ variant, text1, text2, newOrOld }) => {
   return (
      <Description>
         <Title>{text1}</Title>
         {variant !== 'tertiary' && variant !== 'quaternary' && (
            <Subheader
               className={
                  variant.includes('withStatus') && newOrOld === 'Б/У'
                     ? 'orange'
                     : ''
               }
            >
               {text2}
            </Subheader>
         )}
      </Description>
   )
}

const Description = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
})

const Title = styled('p')({
   fontSize: '0.875rem',
   fontWeight: '600',
})

const Subheader = styled('span')({
   fontSize: '0.8125rem',
   color: globalTheme.palette.secondary.green,
   '&.orange': {
      color: globalTheme.palette.secondary.orange,
   },
   overflow: 'hidden',
   whiteSpace: 'nowrap',
   textOverflow: 'ellipsis',
})
