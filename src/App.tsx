import {registerRootComponent} from "expo";
import {ExpoRoot} from "expo-router";
import {configure} from "./shared/services/settings.service";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import {PaperProvider} from "react-native-paper";

export function App() {
    //configure languages
    configure();
    const queryClient = new QueryClient();
    // configure screens path
    // @ts-ignore
    const ctx = require.context("./screens");
    return (<PaperProvider>
        <QueryClientProvider client={queryClient}>
            <ExpoRoot context={ctx}/>
        </QueryClientProvider>
    </PaperProvider>);
}

registerRootComponent(App);
