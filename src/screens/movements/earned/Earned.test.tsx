
import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
// Note: import explicitly to use the types shiped with jest.
import { it, describe, beforeEach, expect } from '@jest/globals';

import { render, screen } from '@testing-library/react-native'
import { renderWithTheme } from '../../../../mocks/renderWithTheme';
import { renderWithNavigator } from '../../../../mocks/renderWithNavigator';
import EarnedMovementsList from './Earned';


describe('Earned Movement List', () => {

    beforeEach(() => {
        render(renderWithNavigator(renderWithTheme(<EarnedMovementsList />)))
    })

    it('renders correctly', () => {
        const listItem = screen.getByTestId('earne-movements-list')
        expect(listItem).toBeOnTheScreen()
    });

    it('should render Movements List', () => {
        const listItem = screen.getByTestId('movements-list')
        expect(listItem).toBeOnTheScreen()
    });



})

