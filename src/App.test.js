import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // 버튼과 버튼에 해당 텍스트가 있는지 테스트
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // 버튼에 배경색을 확인하는 테스트
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  // 클릭 이벤트
  fireEvent.click(colorButton);
  // 클릭후 색상 변화
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  // 클릭후 텍스트 변화 테스트
  expect(colorButton.textContent).toBe('Change to red');
});
test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

// test('button turns blue when clicked', () => {

//   render(<App />);
//   const colorButton = screen.getByRole('button', { name: 'Change to red' });
//   expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
// });
