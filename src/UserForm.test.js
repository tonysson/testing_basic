import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './userForm';

test('it shows two inputs and a button', () => {
	// RENDER THE COMPONENT
	render(<UserForm />);

	// manipulate the component or find an element in it
	const inputs = screen.getAllByRole('textbox');
	const button = screen.getByRole('button');

	// Assertion- make sure the component is doing what we expected
	expect(inputs).toHaveLength(2);
	expect(button).toBeInTheDocument();
});

it('calls on onUserAdd when the form is submitted', () => {
	// MOCK Function
	const mock = jest.fn();
	// Try to render the component
	render(<UserForm onUserAdd={mock} />);
	// Find the two inputs
	const nameInput = screen.getByRole('textbox', { name: /name/i });
	const emailInput = screen.getByRole('textbox', { name: /email/i });
	// Simulate typing in a name
	user.click(nameInput);
	user.keyboard('jane');
	// simulate typing in a email address
	user.click(emailInput);
	user.keyboard('jane@jane.com');
	// Find the button
	const button = screen.getByRole('button');
	// Simulate clicking the button
	user.click(button);
	// Assertion to make sure 'onUserAdd' gets called with email/name
	expect(mock).toHaveBeenCalled();
	expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});

test('empties the two inputs when form is submitted', () => {
	// Try to render the component
	render(<UserForm onUserAdd={() => {}} />);
	// Find the two inputs
	const nameInput = screen.getByRole('textbox', { name: /name/i });
	const emailInput = screen.getByRole('textbox', { name: /email/i });
	// Simulate typing in a name
	user.click(nameInput);
	user.keyboard('jane');
	// simulate typing in a email address
	user.click(emailInput);
	user.keyboard('jane@jane.com');
	// Find the button
	const button = screen.getByRole('button');
	// Simulate clicking the button
	user.click(button);
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
})
