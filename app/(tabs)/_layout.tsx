import { Tabs } from "expo-router";
import { View, Image } from "react-native";
import { colors, components } from "@/constants/theme";
import { tabs } from "@/constants/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

interface TabIconProps {
    focused: boolean;
    icon: any;
}

const TabLayout = () => {
    const insets = useSafeAreaInsets();

    const TabIcon = ({ focused, icon }: TabIconProps) => {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 999,
                        width: tabBar.iconFrame,
                        height: tabBar.iconFrame,
                        backgroundColor: focused ? "#E8705A" : "transparent",
                    }}
                >
                    <Image
                        source={icon}
                        style={{
                            width: tabBar.iconFrame * 0.5,
                            height: tabBar.iconFrame * 0.5,
                            tintColor: "#FFFFFF",
                        }}
                        resizeMode="contain"
                    />
                </View>
            </View>
        );
    };

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: "transparent",
                    shadowOpacity: 0,
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 0,
                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: "center",
                    justifyContent: "center",
                },
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={tab.icon} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabLayout;