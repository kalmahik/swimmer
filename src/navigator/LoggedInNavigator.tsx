import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { COLORS } from '../constants';

export type LoggedInParam = {
    Train: undefined;
    Stat: undefined;
    Agenda: undefined;
    Suggestions: undefined;
};

const Tab = createMaterialBottomTabNavigator<LoggedInParam>();

export const LoggedInNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Train"
            activeColor="white"
            inactiveColor={COLORS.WHITE_TRANSPARENT}
            barStyle={{ backgroundColor: 'black' }}>
            <Tab.Screen
                name="Train"
                component={EmptyComponent}
                options={{
                    tabBarLabel: 'Тренировки',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="timer-outline"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Stat"
                component={EmptyComponent}
                options={{
                    tabBarLabel: 'Статистика',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="chart-bar"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Agenda"
                component={EmptyComponent}
                options={{
                    tabBarLabel: 'Дневник',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="calendar"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Suggestions"
                component={EmptyComponent}
                options={{
                    tabBarLabel: 'Подсказки',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="lightbulb-on-outline"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const EmptyComponent = styled.View`
    flex: 1;
    background-color: white;
`;
