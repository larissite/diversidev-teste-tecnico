import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';


test('shows a button', () => {
  render(<App />);
  const hasButton = screen.getByRole('button', { name: /Press to Roll!/i });
  expect(hasButton).toBeInTheDocument();
});

test('should be enabled', () => { 
   render(<App/>)
   const buttonEnabled = screen.getByRole('button', { name: /Press to Roll/i })
   expect(buttonEnabled).not.toHaveAttribute('disabled')

})

// test('should be enabled', () => { 
//   render(<App/>)
//   const buttonEnabled = screen.getByRole('button', { name: /Press to Roll/i })
//   expect(buttonEnabled).not.toHaveAttribute('disabled')

//   fireEvent.click(buttonEnabled)
//   expect(screen.getAllByRole(/Rolling.../i)).toBeInTheDocument()
// })
