import './App.css'
import MainTitle from './component/mainTitle/MainTitle'
import Button from './component/button/Button'
import Parent from './component/pages/Parent'
import SwitchTheme from './component/switchTheme/SwitchTheme'
import Login from './component/pages/login/login'
import StudentList from './component/studentList/StudentList'
import Homework from './component/homework/Homework'
import Count from './component/count/Count'



export function App() {

  return (
    <div>
      <MainTitle title="title1"/>
      <Button/>
      <Parent/>
      <SwitchTheme/>
      <StudentList/>
      <Login/>
      <Homework/>
      <Count/>
      
    </div>
  )
}

// export default App
