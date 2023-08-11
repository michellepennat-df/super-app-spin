import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
// Note: import explicitly to use the types shiped with jest.
import { it, describe, beforeEach, expect } from '@jest/globals';

import { render, screen } from '@testing-library/react-native'
import { renderWithTheme } from '../../../../mocks/renderWithTheme';
import { renderWithNavigator } from '../../../../mocks/renderWithNavigator';
import MovementDetail, { Props } from './Detail';
import { Movement } from '../../../models/movement/Movement';

const mockedMovement: Movement = {
    "entity": "Oxxo Gas",
    "date": "Sun Aug 06 2023",
    "points": 100,
    "operation": "used",
    "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
    "id": 1

}

const params: Props = {
    //@ts-ignore
    navigation: {},
    route: {
        key: 'Details',
        name: "Detalles",
        params: {
            movement: mockedMovement
        }
    }
}

describe('Movement Detail', () => {

    beforeEach(() => {
        render(renderWithNavigator(renderWithTheme(<MovementDetail {...params} />)))
    })

    it('renders correctly', () => {
        const listItem = screen.getByTestId('detail-container')
        expect(listItem).toBeOnTheScreen()
    });

    it('should render partner logo', () => {
        const logo = screen.getByTestId('partner-logo')

        expect(logo).toBeOnTheScreen()
        expect(logo.props).toHaveProperty('source', require('../../../assets/partner_logo.png'))
    })

    it('should render partner name', () => {
        const name = screen.getByText(mockedMovement.entity)

        expect(name).toBeOnTheScreen()
    })

    it('should shows minus icon if operation its used', () => {
        const points = screen.getByText(mockedMovement.points.toString())

        expect(points).toBeOnTheScreen()

        const operator = screen.getByText('-')

        expect(operator).toBeOnTheScreen()
    })

    it('should shows plus icon if operation its earned', () => {

        const params: Props = {
            //@ts-ignore
            navigation: {},
            route: {
                key: 'Details',
                name: "Detalles",
                params: {
                    movement: { ...mockedMovement, operation: 'earned' }
                }
            }
        }
        screen.update(renderWithNavigator(renderWithTheme(<MovementDetail {...params} />)))

        const points = screen.getByText(mockedMovement.points.toString())

        expect(points).toBeOnTheScreen()

        const operator = screen.getByText('+')

        expect(operator).toBeOnTheScreen()
    })

    it('should show total amount as money', () => {

        const amount = screen.getByTestId('total-amount')

        expect(amount).toBeOnTheScreen()
        expect(amount).toHaveTextContent(`${(mockedMovement.points / 10).toFixed(2)}`)
    })

    it('should show local date format', () => {

        const date = screen.getByTestId('date')

        expect(date).toBeOnTheScreen()
        expect(date).toHaveTextContent(new Date(mockedMovement.date).toLocaleDateString())
    })

    it('should show transaction number', () => {

        const transaction = screen.getByText(mockedMovement.transactionNo)

        expect(transaction).toBeOnTheScreen()
    })

    it('should hide start to use points date if operation is used ', () => {

        const toUseDate = screen.queryByText('Úsalos desde el:')

        expect(toUseDate).not.toBeOnTheScreen()
    })

    it('should show start to use points date if operation is earned ', () => {
        const params: Props = {
            //@ts-ignore
            navigation: {},
            route: {
                key: 'Details',
                name: "Detalles",
                params: {
                    movement: { ...mockedMovement, operation: 'earned' }
                }
            }
        }
        const movemntDate = new Date(mockedMovement.date)
        const startDate = new Date(movemntDate.setMonth(movemntDate.getMonth() + 1)).toLocaleDateString()

        screen.update(renderWithNavigator(renderWithTheme(<MovementDetail {...params} />)))

        const toUseDate = screen.getByText(startDate)

        expect(toUseDate).toBeOnTheScreen()
    })

    it('should concat to En esta compra text, ganaste or usaste', () => {

        let text = screen.getByText('En esta compra usaste:')

        expect(text).toBeOnTheScreen()

        const params: Props = {
            //@ts-ignore
            navigation: {},
            route: {
                key: 'Details',
                name: "Detalles",
                params: {
                    movement: { ...mockedMovement, operation: 'earned' }
                }
            }
        }

        screen.update(renderWithNavigator(renderWithTheme(<MovementDetail {...params} />)))

        text = screen.getByText('En esta compra ganaste:')

        expect(text).toBeOnTheScreen()
    })

})

