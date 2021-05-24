import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from './../usecases/Products';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState({
		id: '',
		nombre: '',
		precio: 0,
		descripcion: '',
	});

	const { getProduct, updateProduct } = new Product();

	useEffect(() => {
		getProduct(id)
			.then((result) => {
				setNombre(result.data().nombre);
				setPrecio(result.data().precio);
				setDescripcion(result.data().descripcion);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const [nombre, setNombre] = useState();
	const [precio, setPrecio] = useState();
	const [descripcion, setDescripcion] = useState();
	const history = useHistory();

	const handleNombre = (e) => {
		setNombre(e.target.value);
	};
	const handlePrecio = (e) => {
		setPrecio(e.target.value);
	};
	const handleDescripcion = (e) => {
		setDescripcion(e.target.value);
	};

	async function update(event) {
		try {
			event.preventDefault();
			await updateProduct(id, {
				nombre,
				precio,
				descripcion,
			});
			history.push('/products');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<h1>Product Detail: {id}</h1>
			<Form onSubmit={update}>
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
		</>
	);
}

export default ProductDetail;
