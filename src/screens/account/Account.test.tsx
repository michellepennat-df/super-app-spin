
import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
// Note: import explicitly to use the types shiped with jest.
import { it, describe, beforeEach, expect, jest } from '@jest/globals';
import { render, screen, waitFor, fireEvent } from '@testing-library/react-native'
import Account from './Account';
import { renderWithTheme } from '../../../mocks/renderWithTheme';
import { renderWithNavigator } from '../../../mocks/renderWithNavigator';
import { act } from 'react-test-renderer';
import { renderWithPoints } from '../../../mocks/renderWithPoints';

const mockedContextValue = {
    points: 10657,
    setPoints(points: number) {

    },
    addPoints(points: number) {

    },
    getPoints() {

    },
}

describe('Movements main screen', () => {

    beforeEach(() => {
        render(renderWithPoints(renderWithTheme(<Account />), mockedContextValue))
    })

    it('renders correctly', () => {
        const acoount = screen.getByTestId('account-container')

        expect(acoount).toBeOnTheScreen()
    })

    it('should render user points from context', () => {
        const points = screen.getByText(`${new Intl.NumberFormat('es-MX').format(mockedContextValue.points)} puntos`)

        expect(points).toBeOnTheScreen()
    })

    describe('Close session modal', () => {
        it('should make modal visible after pressing Cierra sesión button', () => {
            const button = screen.getByText('Cierra sesión')

            expect(button).toBeOnTheScreen()

            fireEvent.press(button)

            const modal = screen.getByTestId('close-session-modal')

            expect(modal).toBeOnTheScreen()

        })

        it('should close modal', () => {
            const button = screen.getByText('Cierra sesión')

            expect(button).toBeOnTheScreen()

            fireEvent.press(button)

            const modal = screen.getByTestId('close-session-modal')
            const closeModalButton = screen.getByText('En otro momento')

            expect(modal).toBeVisible()

            fireEvent.press(closeModalButton)

            expect(modal).not.toBeVisible()

        })
    })

})

