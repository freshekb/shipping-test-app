import {GestureHandlerRootView} from "react-native-gesture-handler";
import React from "react";
import {Drawer} from "expo-router/drawer";
import {FontAwesome} from "@expo/vector-icons";
import {Pressable} from "react-native";
import {Link} from "expo-router";
import {useTranslation} from "react-i18next";

import {
    ThemeProvider,
    DarkTheme,
    DefaultTheme,
    useTheme,
} from "@react-navigation/native";
export default function AppLayout() {
    const {t} = useTranslation();
    return (
        
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer>
                <Drawer.Screen
                    name="index" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: t('LIST'),
                        title: t('LIST'),
                        drawerIcon: ({color}) => <FontAwesome size={28} name="list" color={color}/>,
                        headerRight: ({tintColor}) => (
                            <Link href="/settings" asChild style={{marginRight:20}}>
                                <Pressable>
                                    <FontAwesome size={28} name="cog" color={tintColor}/>
                                </Pressable>
                            </Link>
                        ),


                    }}
                />
                <Drawer.Screen
                    name="settings" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: t('SETTINGS'),
                        title: t('SETTINGS'),
                        drawerIcon: ({color}) => <FontAwesome size={28} name="cog" color={color}/>,
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
