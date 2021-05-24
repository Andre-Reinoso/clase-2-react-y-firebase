import React, { useEffect, useState } from 'react';
import { Container, Table, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Product from '../usecases/Products';

function Products() {
	const [products, setProducts] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const { getProducts } = new Product();
		getProducts()
			.then((collections) => {
				let listOfProducts = [];
				collections.forEach((product) => {
					listOfProducts.push({
						id: product.id,
						nombre: product.data().nombre,
						precio: product.data().precio,
						descripcion: product.data().descripcion,
					});
				});
				setProducts(listOfProducts);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<Container>
				<Row lg={7}>
					<Col>
						<Table striped>
							<thead>
								<td>ID</td>
								<td>Nombre</td>
								<td>Precio</td>
								<td>Descripcion</td>
								<td>Accion</td>
							</thead>
							<tbody>
								{products.map((product) => {
									return (
										<tr>
											<td>{product.id}</td>
											<td>{product.nombre}</td>
											<td>{product.precio}</td>
											<td>{product.descripcion}</td>
											<td>
												<Button
													onClick={() => {
														history.push(`/product/${product.id}`);
													}}>
													Detalle
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Products;
