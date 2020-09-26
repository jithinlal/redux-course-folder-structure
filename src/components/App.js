import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleInitialData } from '../actions/shared';
import Todos from './Todos';
import Goals from './Goals';

export default function App() {
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);

	React.useEffect(() => {
		dispatch(handleInitialData());
	}, [dispatch]);

	if (loading === true) {
		return <h3>Loading</h3>;
	}

	return (
		<div>
			<Todos />
			<Goals />
		</div>
	);
}
