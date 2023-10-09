/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from '../components/app/App'

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test('demo', () => {
  expect(true).toBe(true)
})

test("Renders the main app component", () => {
  render(<App />)
  expect(true).toBeTruthy()
})