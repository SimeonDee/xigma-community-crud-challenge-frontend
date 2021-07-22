import 'bootstrap/dist/css/bootstrap.min.css'
import 'toastr/build/toastr.min.css'
import './App.css';
import dotenv from 'dotenv'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/home-page.component'
import NavBar from './components/navbar.component'
import Footer from './components/footer.component'
import ListMembers from './components/members/list-members.component'
import AddMembers from './components/members/add-member.component'
import UpdateMembers from './components/members/update-member.component'

//Load environment variables
dotenv.config()

function App() {
  return (
      <Router>
        <div className="container">
          <NavBar username="Anonymous" />
          <Route path='/' component={HomePage} exact={true} />
          <Route path='/members' component={ListMembers} exact={true} />
          <Route path='/members/add' component={AddMembers} exact={true} />
          <Route path='/members/update/:id' component={UpdateMembers} exact={true} />
          <Footer />
        </div>
      </Router>
    
  );
}

export default App;
