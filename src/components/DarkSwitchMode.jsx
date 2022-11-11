import { Switch, useColorMode } from "@chakra-ui/react";

const DarkSwitchMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Switch
            pos="fixed"
            top="1rem"
            right="1rem"
            color="green"
            isChecked={isDark}
            onChange={toggleColorMode}
        />
    )
}

export default DarkSwitchMode;