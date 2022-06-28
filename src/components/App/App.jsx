import React, { useEffect } from "react";
import {
  HashRouter as Router,
  matchPath,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

import StudentAdditional from "../StudentAdditional/StudentAdditional";
import StudentInfo from "../StudentInfo/StudentInfo";
import StudentSubjects from "../StudentSubjects/StudentSubjects";
import StudentTerms from "../StudentTerms/StudentTerms";
import StudentModal from "../StudentModal/StudentModal";

import TutorInfo from "../TutorForm/TutorInfo";
import TutorSubjects from "../TutorSubjects/TutorSubjects";
import TutorAdditional from "../TutorAdditional/TutorAdditional";
import TutorTerms from "../TutorTerms/TutorTerms";
import TutorModal from "../TutorModal/TutorModal";

import Profile from "../Profile/Profile";
import ProfileInfoForm from "../ProfileInfoForm/ProfileInfoForm";
import ProfileDashboard from "../ProfileDashboard/ProfileDashboard";
import Tools from "../Tools/Tools";

import "./App.css";
import TuteesPage from "../TuteesPage/TuteesPage";
import TutorsPage from "../TutorsPage/TutorsPage";
import RecordsPage from "../RecordsPage/RecordsPage";
import MatchPage from "../MatchPage/MatchPage";
import RoleChoice from "../RoleChoice/RoleChoice";
import ProgressBar from "../ProgressBar/ProgressBar";
import RegisterForm from "../RegisterForm/RegisterForm";
import ImageUpload from "../ImageUpload/ImageUpload";
import Guidelines from "../Guidelines/Guidelines";
import UserPage from "../UserPage/UserPage";
import TutorInfoEdit from "../TutorInfoEdit/TutorInfoEdit";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import MatchProfile from "../MatchProfile/MatchProfile";
import Sessions from "../Sessions/Sessions"

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Unprotected Routes */}

          <Route exact path="/ImageUpload/:id">
            <ImageUpload />
          </Route>

          <Route exact path="/Home">
           { user.id ?
              <Redirect to ="/ProfileDashboard" />
              :
              <LoginPage />
           }
          </Route>

          <Route exact path="/reducers">
            <UserPage />
          </Route>

          <Route exact path="/RolesChoice">
            <RoleChoice />
          </Route>

          <Route exact path="/ProgressBar">
            <ProgressBar />
          </Route>

          <Route exact path="/ProfileDashboard">
            <ProfileDashboard />
          </Route>

          <Route exact path="/StudentAdditional">
            <StudentAdditional />
          </Route>

          <Route exact path="/StudentInfo">
            <StudentInfo />
          </Route>

          <Route exact path="/StudentModal">
            <StudentModal />
          </Route>

          <Route exact path="/StudentSubjects">
            <StudentSubjects />
          </Route>

          <Route exact path="/StudentTerms">
            <StudentTerms />
          </Route>

          <Route exact path="/TutorAdditional">
            <TutorAdditional />
          </Route>

          <Route exact path="/TutorModal">
            <TutorModal />
          </Route>

          <Route exact path="/TutorInfo">
            <TutorInfo />
          </Route>

          <Route exact path="/TutorInfoEdit">
            <TutorInfoEdit />
          </Route>

          <Route exact path="/TutorSubjects">
            <TutorSubjects />
          </Route>

          <Route exact path="/TutorTerms">
            <TutorTerms />
          </Route>

          <Route exact path="/ProfileInfoForm">
            <ProfileInfoForm />
          </Route>

          <Route exact path="/Nav">
            <Nav />
          </Route>
       

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/admin"
          >
            <TuteesPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/profile"
          >
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/MatchProfile"
          >
            <MatchProfile />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Sessions"
          >
            <Sessions />
          </ProtectedRoute>





          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/tutors"
          >
            <TutorsPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/records"
          >
            <RecordsPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/match"
          >
            <MatchPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/tools"
          >
            <Tools />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in, // redirect to the /user page
              <Redirect to="/admin" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/home" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

            







          <ProtectedRoute exact path="/Guidelines">
            <Guidelines />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
