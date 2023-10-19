import { Tabs } from './components/UI/Tabs'

export function App() {
   return (
      <div>
         <Tabs friends={5} request={3}>
            Мои друзья
         </Tabs>
         <Tabs>Запросы в друзья</Tabs>
      </div>
   )
}
