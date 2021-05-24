import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProduct from '../pages/AddProduct';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';
import Products from '../pages/Products';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/addProduct' component={AddProduct} />
				<Route exact path='/products' component={Products} />
				<Route exact path='/product/:id' component={ProductDetail} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
