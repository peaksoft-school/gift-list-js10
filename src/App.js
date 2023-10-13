import { Card } from './components/UI/Card'

export function App() {
   return (
      <div
         className="App"
         style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            gap: '20px',
            flexDirection: 'column',
         }}
      >
         <Card />
         <Card list />
         <Card variant="secondary" />
         <Card variant="secondary" list />
         <Card variant="tertiary" />
         <Card variant="quaternary" />
         <Card variant="withStatusBottom" />
         <Card variant="withStatusTop" />
      </div>
   )
}
