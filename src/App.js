import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog';
import Calendly from './pages/Calendly';

const  App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/pricing" exact component={Pricing} />
				<Route path="/blog" exact component={Blog} />
				<Route path="/Calendly" exact component={Calendly}/>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
