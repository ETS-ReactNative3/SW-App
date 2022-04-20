import React from 'react';
import { render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../NavBar';

it('renders home link', () => {
    const { getByText } = render(<NavBar/>);
    const homeLink = getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
});