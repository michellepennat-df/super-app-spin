
import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
// Note: import explicitly to use the types shiped with jest.
import { it, describe, beforeEach, expect, jest } from '@jest/globals';
import { render, screen, waitFor, fireEvent } from '@testing-library/react-native'
import Movements from './Movements';
import { renderWithTheme } from '../../../mocks/renderWithTheme';
import { renderWithNavigator } from '../../../mocks/renderWithNavigator';
import { act } from 'react-test-renderer';


describe('Movements main screen', () => {

    beforeEach(() => {
        render(renderWithNavigator(renderWithTheme(<Movements />)))
    })

    it('renders correctly', () => {
        const listItem = screen.getByTestId('movements-container')

        expect(listItem).toBeOnTheScreen()
    })

    it('should render Todos, Ganados and Usados tabs', async () => {

        const allTab = screen.getByTestId('Todos-tab')
        const earnedTab = screen.getByTestId('Ganados-tab')
        const usedTab = screen.getByTestId('Usados-tab')

        await waitFor(() => {
            expect(allTab).toBeOnTheScreen()
            expect(earnedTab).toBeOnTheScreen()
            expect(usedTab).toBeOnTheScreen()
        })

    })

})

