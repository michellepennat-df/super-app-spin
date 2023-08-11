
import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
// Note: import explicitly to use the types shiped with jest.
import { it, describe, beforeEach, expect,jest } from '@jest/globals';

import { render, screen, fireEvent } from '@testing-library/react-native'
import ListItem from './ListItem';
import { ListItemProps } from '../types';
import { renderWithTheme } from '../../../mocks/renderWithTheme';

const mockeditem: ListItemProps = {
    itemName: 'Test Name',
    supportText: 'Martes 01',
    infoLabel: '1000',
    onPress: jest.fn(),
    icon: require('../../assets/partner_logo.png')
}

describe('ListItem', () => {

    beforeEach(() => {
        render(renderWithTheme(<ListItem {...mockeditem} />))
    })

    it('renders correctly', () => {
        const listItem = screen.getByTestId('list-item-container')

        expect(listItem).toBeOnTheScreen()
    });

    it('should renders item info', () => {
        const itemName = screen.getByText(mockeditem.itemName)
        const supportText = screen.getByText(mockeditem.supportText)
        const infoLabel = screen.getByText(mockeditem.infoLabel)

        expect(itemName).toBeOnTheScreen()
        expect(supportText).toBeOnTheScreen()
        expect(infoLabel).toBeOnTheScreen()
    });

    it('should renders partner logo', () => {
        const logo = screen.getByTestId('logo')

        expect(logo).toBeOnTheScreen()
        expect(logo.props).toHaveProperty('source',mockeditem.icon)
    });

    it('should fire onPress function', () => {
        const listItem = screen.getByTestId('list-item-container')
        
        fireEvent.press(listItem)

        expect(mockeditem.onPress).toBeCalled()
    })
})

