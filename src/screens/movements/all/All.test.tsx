
import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
// Note: import explicitly to use the types shiped with jest.
import { it, describe, beforeEach, expect } from '@jest/globals';

import { render, screen } from '@testing-library/react-native'
import { renderWithTheme } from '../../../../mocks/renderWithTheme';
import { renderWithNavigator } from '../../../../mocks/renderWithNavigator';
import AllMovementsList from './All';


describe('All Movement List', () => {

    beforeEach(() => {
        render(renderWithNavigator(renderWithTheme(<AllMovementsList />)))
    })

    it('renders correctly', () => {
        const listItem = screen.getByTestId('all-movements-list')
        expect(listItem).toBeOnTheScreen()
    });

    it('should render Movements List', () => {
        const listItem = screen.getByTestId('movements-list')
        expect(listItem).toBeOnTheScreen()
    });



})

