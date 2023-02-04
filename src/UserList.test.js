import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
	const users = [
		{ name: 'Jane', email: 'jane@jane.com' },
		{ name: 'Same', email: 'same@same.com' },
	];

	render(<UserList users={users} />);

	return { users };
}

it('rendre one row per user', () => {
	// Render the component
	renderComponent();

	// const { container } = render(<UserList users={users} />);

	// eslint-disable-next-line
	// const rows = container.querySelectorAll('tbody tr');

	// Find all the rows in tha table
	// screen.logTestingPlaygroundURL();
	// One way of doing this
	const rows = within(screen.getByTestId('users')).getAllByRole('row');

	// Assertion : correct number of rows
	expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
	const { users } = renderComponent();
	// screen.logTestingPlaygroundURL();
	for (let user of users) {
		const name = screen.getByRole('cell', { name: user.name });
		const email = screen.getByRole('cell', { name: user.email });

		expect(name).toBeInTheDocument();
		expect(email).toBeInTheDocument();
	}
});
