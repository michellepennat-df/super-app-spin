
import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
// Note: import explicitly to use the types shiped with jest.
import { it, describe, beforeEach, expect, jest } from '@jest/globals';
import { render, screen, waitFor, fireEvent } from '@testing-library/react-native'
import { Benefits } from './Benefits';
import { renderWithTheme } from '../../../mocks/renderWithTheme';
import { renderWithPoints } from '../../../mocks/renderWithPoints';
import { renderWithNavigator } from '../../../mocks/renderWithNavigator';

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
        render(renderWithNavigator(renderWithPoints(renderWithTheme(<Benefits />), mockedContextValue)))
    })

    it('renders correctly', () => {
        const benefits = screen.getByTestId('benefits-container')

        expect(benefits).toBeOnTheScreen()
    })

    it('shloud show points from context', () => {
        const points = screen.getByText(new Intl.NumberFormat('es-MX').format(mockedContextValue.points))

        expect(points).toBeOnTheScreen()
    })

    it('shloud show amount as money', () => {
        const amount = screen.getByText(`Valen ${new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(mockedContextValue.points / 10)}`)

        expect(amount).toBeOnTheScreen()
    })

})

