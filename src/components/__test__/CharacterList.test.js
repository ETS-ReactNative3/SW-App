import React from 'react';
import { screen, render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import CharacterList from '../CharacterList';

test('should render CharacterList component', () => {
    render(<CharacterList/>);
    screen.debug();
})

