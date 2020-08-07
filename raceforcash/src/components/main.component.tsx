import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  NavbarComponent  from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StableComponent } from './stable/stable.component';
import { HomepageComponent } from './homepage/homepage.component';

export const MainComponent: React.FC = () => {
    return(
        <div className="main-container">
            <BrowserRouter>
                <NavbarComponent />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <LoginComponent />
                        </Route>
                        <Route path="/home">
                            <HomepageComponent />
                        </Route>
                        <Route path="/registration">
                            <RegistrationComponent />
                        </Route>
                        {/* <Route path='/stable'> */}
                        <Route path='/horses'>
                            <StableComponent />
                        </Route>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}