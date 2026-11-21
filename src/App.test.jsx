import { render, screen, fireEvent } from '@testing-library/react';
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

  it('filters portfolio between Company / Enterprise and Freelance & Independent tabs', () => {
    render(<App />);
    const freelanceTab = screen.getByRole('tab', { name: /Freelance & Independent/i });
    fireEvent.click(freelanceTab);
    expect(screen.getByText(/Maintenance Management System \(MMS\)/i)).toBeInTheDocument();
    expect(screen.getByText(/PT Peroksida Indonesia Pratama/i)).toBeInTheDocument();
    expect(screen.getByText(/Joinan Securities Crowdfunding/i)).toBeInTheDocument();
    expect(screen.getByText(/Snapinn Property Agent/i)).toBeInTheDocument();
    expect(screen.queryByText(/Evermos Backend & Event-Driven Services/i)).not.toBeInTheDocument();

    const companyTab = screen.getByRole('tab', { name: /Company \/ Enterprise/i });
    fireEvent.click(companyTab);
    expect(screen.getByText(/Evermos Backend & Event-Driven Services/i)).toBeInTheDocument();
    expect(screen.queryByText(/Maintenance Management System \(MMS\)/i)).not.toBeInTheDocument();
  });

  it('toggles between dark mode and light mode', () => {
    render(<App />);
    const toggleBtn = screen.getByRole('button', { name: /Switch to light mode/i });
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    fireEvent.click(toggleBtn);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(screen.getByRole('button', { name: /Switch to dark mode/i })).toBeInTheDocument();
  });
});
