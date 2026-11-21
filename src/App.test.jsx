import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders portfolio owner name, skills, experience, and backend highlights', () => {
    render(<App />);
    expect(screen.getAllByText(/Rai Raksa M/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Backend Engineer/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Evermos/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Languages & Frameworks/i)).toBeInTheDocument();
    expect(screen.getByText(/Databases & Messaging/i)).toBeInTheDocument();
    expect(screen.getByText(/Cloud & Observability/i)).toBeInTheDocument();
    expect(screen.getByText(/AI & Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Evermos Backend & Event-Driven Services/i)).toBeInTheDocument();
  });
});
