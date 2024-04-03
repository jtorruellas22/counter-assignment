import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterElement = screen.getByTestId('count');
  expect(counterElement).toBeInTheDocument();
  const counterRender = screen.getByText(/0/i);
  expect(counterRender).toBeInTheDocument();
});

test('clicking + increments the count', async() => {
  const incrementButton = screen.getByRole('button', {name: '+'})

  await userEvent.click(incrementButton)
  expect(Counter.increment).toHaveBeenCalled
  expect(Counter.setCount).toHaveBeenCalled
  
  const counterRender = screen.getByText(/1/i);
  expect(counterRender).toBeInTheDocument();
});

test('clicking - decrements the count', async() => {
  const decrementButton = screen.getByRole('button', {name: '-'})

  await userEvent.click(decrementButton)
  expect(Counter.decrement).toHaveBeenCalled
  expect(Counter.setCount).toHaveBeenCalled

  const counterRender = screen.getByText(/-1/i);
  expect(counterRender).toBeInTheDocument();
});
