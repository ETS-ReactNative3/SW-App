import React from 'react';
import { render, screen } from 'react-dom';
import Heading from '../Heading';

// it('renders slogan', () => {
//   render(<Heading />);
//   expect(screen.getByText('Filmcollection')).toBeInTheDocument();
// });

test('includes a title', () => {
    render(<Heading />);
    screen.debug();
})
