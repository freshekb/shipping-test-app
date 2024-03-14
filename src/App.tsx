import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import {configure} from "./shared/services/settings.service";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";

export function App() {
    configure();
    const queryClient = new QueryClient()
    // @ts-ignore
    const ctx = require.context("./screens");
    return  <QueryClientProvider client={queryClient}>
        <ExpoRoot context={ctx} />
    </QueryClientProvider>;
}

registerRootComponent(App);
