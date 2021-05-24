import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Product from './../usecases/Products';

function AddProduct() {
	const [nombre, setNombre] = useState('');
	const [precio, setPrecio] = useState(0);
	const [descripcion, setDescripcion] = useState('');
	const history = useHistory();

	async function add(event) {
		try {
			event.preventDefault();
			const { createProduct } = new Product();
			await createProduct({
				nombre,
				precio,
				descripcion,
			});
			history.push('products');
		} catch (error) {
			console.log(error);
		}
	}
	const handleNombre = (e) => {
		setNombre(e.target.value);
	};
	const handlePrecio = (e) => {
		setPrecio(e.target.value);
	};
	const handleDescripcion = (e) => {
		setDescripcion(e.target.value);
	};

	return (
		<>
			<Container>
				<Row>
					<Col lg={5}>
						<h1>Agregar Producto</h1>
						<Form onSubmit={add}>
							<Form.Group>
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									required
									type='text'
									value={nombre}
									onChange={handleNombre}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Precio</Form.Label>
								<Form.Control
									value={precio}
									onChange={handlePrecio}
									required
									type='number'
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Descripcion</Form.Label>
								<Form.Control
									value={descripcion}
									onChange={handleDescripcion}
									required
									type='text'
								/>
							</Form.Group>

							<Button variant='primary' type='submit'>
								Save
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default AddProduct;
