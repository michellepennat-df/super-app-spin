
import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
// Note: import explicitly to use the types shiped with jest.
import { it, describe, beforeEach, expect, jest } from '@jest/globals';

import { render, screen, fireEvent } from '@testing-library/react-native'
import MovementsList from './List';
import { renderWithTheme } from '../../../../mocks/renderWithTheme';
import { renderWithNavigator } from '../../../../mocks/renderWithNavigator';
import { MovementsSection } from '../../../models/movement/MovementResponse';
import { MovementsListProps } from './types';

const mockedMovements: MovementsSection[] = [
    {
        "title": "Hoy",
        "data": [
            {
                "entity": "Oxxo Gas",
                "date": "Sun Aug 06 2023",
                "points": 100,
                "operation": "used",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 1
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "points": 1000,
                "operation": "earned",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 2
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "points": 1000,
                "operation": "earned",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 3
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "expiryDate": "Fri Sep 01 2023",
                "points": 1000,
                "operation": "used",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "giftCode": "42738499092812000",
                "id": 4
            }
        ]
    },
    {
        "title": "Ayer",
        "data": [
            {
                "entity": "Oxxo Gas",
                "date": "Sun Aug 06 2023",
                "points": 100,
                "operation": "earned",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 1
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "points": 1000,
                "operation": "earned",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 2
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "points": 1000,
                "operation": "used",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 3
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "expiryDate": "Fri Sep 01 2023",
                "points": 1000,
                "operation": "earned",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "giftCode": "42738499092812000",
                "id": 4
            }
        ]
    },
    {
        "title": "Semana pasada",
        "data": [
            {
                "entity": "Oxxo Gas",
                "date": "Sun Aug 06 2023",
                "points": 100,
                "operation": "earned",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 1
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "points": 1000,
                "operation": "earned",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 2
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "points": 1000,
                "operation": "used",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "id": 3
            },
            {
                "entity": "Volaris",
                "date": "Sun Aug 01 2023",
                "expiryDate": "Fri Sep 01 2023",
                "points": 1000,
                "operation": "earned",
                "transactionNo": "5dced89c-2b6e-4a1c-a715-c19b0a51",
                "giftCode": "42738499092812000",
                "id": 4
            }
        ]
    }
]

const listMockListProps: MovementsListProps = {
    movements: mockedMovements,
    getData: jest.fn(),
    loading: false,
    moreData: true
}

describe('Movement List', () => {

    beforeEach(() => {
        render(renderWithNavigator(renderWithTheme(<MovementsList {...listMockListProps} />)))
    })

    it('renders correctly', () => {
        const listItem = screen.getByTestId('movements-list')
        expect(listItem).toBeOnTheScreen()
    });

    it('should show a spinner if is loading and hide it if not', () => {
        screen.update(renderWithNavigator(renderWithTheme(<MovementsList {...listMockListProps} loading={true} />)))
        const spinner = screen.queryByTestId('button-activity-indicator')

        expect(spinner).toBeOnTheScreen()

        screen.update(renderWithNavigator(renderWithTheme(<MovementsList {...listMockListProps} loading={false} />)))

        expect(spinner).not.toBeOnTheScreen()
    })

    it('should render time rate at section list', () => {
        const sectionTitle = screen.getByText(mockedMovements[0].title)

        expect(sectionTitle).toBeOnTheScreen()
    })

    it('should list items', () => {
        const listItem = screen.getAllByText(mockedMovements[0].data[0].entity)

        expect(listItem[0]).toBeOnTheScreen()
    })

    // TODO: Scroll event its not fired
    // it('should fire getData function reaching the end of the list', () => {
    //     const listItem = screen.getByTestId('movements-list')

    //     screen.update(renderWithNavigator(renderWithTheme(<MovementsList {...listMockListProps} getData={() => console.log('HOLA')} />)))
        
    //     fireEvent.scroll(listItem, {
    //         nativeEvent: {
    //             contentOffset: {
    //                 y: 60,
    //             },
    //             contentSize: {
    //                 // Dimensions of the scrollable content
    //                 height: 60,
    //                 width: 100,
    //             },
    //             layoutMeasurement: {
    //                 // Dimensions of the device
    //                 height: 100,
    //                 width: 100,
    //             },
    //         }
    //     })

    //     expect(listMockListProps.getData).toHaveBeenCalled()
    // })

})

