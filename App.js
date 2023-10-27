
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppNavigation from './Navigation/AppNaviagation'
import { ThemeProvider } from './themes/themeProvider'


export default function App() {


    return (
        <ThemeProvider>
        <SafeAreaProvider >
            <AppNavigation />
        </SafeAreaProvider>
        </ThemeProvider>
    )
}
