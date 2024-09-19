import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import App from './App';

// Mock data that should match the structure in './mockData'


describe('App Component', () => {

  // Test that country options are rendered and can be selected
  test('renders country options and updates city options when a country is selected', () => {
    render(<App />);
    
    // Verify that country options are present
    const countrySelect = screen.getByLabelText(/please select a country/i);
    expect(countrySelect).toBeInTheDocument();
    expect(screen.getByText('select')).toBeInTheDocument();

    // Select a country
    fireEvent.change(countrySelect, { target: { value: 'India' } });
    
    // Verify city options are updated
    const citySelect = screen.getByLabelText(/please select a city/i);
    expect(citySelect).toBeInTheDocument();
    expect(screen.getByText('Bangalore')).toBeInTheDocument();
    expect(screen.getByText('Mumbai')).toBeInTheDocument();
    expect(screen.getByText('Kochi')).toBeInTheDocument();
    
  });

  // Test that city options are rendered based on selected country and updates language options
  test('renders city options based on selected country and updates language options when a city is selected', () => {
    render(<App />);
    
    // Select a country
    const countrySelect = screen.getByLabelText(/please select a country/i);
    fireEvent.change(countrySelect, { target: { value: 'Sri Lanka' } });

    // Select a city
    const citySelect = screen.getByLabelText(/please select a city/i);
    expect(citySelect).toBeInTheDocument();
    expect(screen.getByText('Colombo')).toBeInTheDocument();
    expect(screen.getByText('Jaffna')).toBeInTheDocument();
    expect(screen.getByText('Galle')).toBeInTheDocument();

    // Select a city
    fireEvent.change(citySelect, { target: { value: 'Jaffna' } });
    
    // Verify language options are updated
    const languageSelect = screen.getByLabelText(/please select a language/i);
    expect(languageSelect).toBeInTheDocument();
    expect(screen.getByText('Tamil')).toBeInTheDocument();
    expect(screen.getByText('Vedda')).toBeInTheDocument();
  });

  // Test that language options are rendered based on selected city
  // test('renders language options based on selected city', () => {
  //   render(<App />);
    
  //   // Select a country
  //   const countrySelect = screen.getByLabelText(/please select a country/i);
  //   fireEvent.change(countrySelect, { target: { value: 'Bangladesh' } });

  //   // Select a city
  //   const citySelect = screen.getByLabelText(/please select a city/i);
  //   fireEvent.change(citySelect, { target: { value: 'Mirpur' } });
    
  //   // Verify language options are updated
  //   const languageSelect = screen.getByLabelText(/please select a language/i);
  //   expect(languageSelect).toBeInTheDocument();
  //   expect(screen.getByText('Rangpuri')).toBeInTheDocument();
  //   expect(screen.getByText('English')).toBeInTheDocument();
  //   expect(screen.getByText('Bengali')).toBeInTheDocument();
  // });


  it("shold check for test id",()=>{
    render(<App />);
     let country=screen.getByLabelText(/please select a country/i);
     fireEvent.change(country, { target: { value: 'Bangladesh' } });
     const citySelect = screen.getByTestId("city");
    fireEvent.change(citySelect, { target: { value: 'Mirpur' } });
    const languageSelect = screen.getByLabelText(/please select a language/i);
    expect(languageSelect).toBeInTheDocument();
    expect(screen.getByText('Rangpuri')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Bengali')).toBeInTheDocument();

 
  })

});
