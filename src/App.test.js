import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // 버튼과 버튼에 해당 텍스트가 있는지 테스트
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // 버튼에 배경색을 확인하는 테스트
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {});
