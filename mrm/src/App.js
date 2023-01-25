import './App.css';
import MyroomButton from './components/myroom/myroom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInSide from './components/Auth/SignInSide';
import SignUp from './components/Auth/SignUp';
import CalendarApp from './components/myroom/myroomitem/CalendarApp';
import ProfileApp from './components/myroom/myroomitem/ProfileApp';
import MyMemo from './components/myroom/myroomitem/MyMemo';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/calendar' element={<CalendarApp/>}/>
        <Route path='/profile' element={<ProfileApp/>}/>
        <Route path='/mymemo' element={<MyMemo/>}/>
        {/* <Route path='/clock' element={<ClockApp/>}/> */}
        <Route path='/myroom' element={<MyroomButton/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
