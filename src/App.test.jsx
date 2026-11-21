import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders portfolio owner name and sections', () => {
    render(<App />);
    expect(screen.getAllByText(/Rai Raksa M/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Fullstack Web Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/Download Resume/i)).toBeInTheDocument();
  });
});
