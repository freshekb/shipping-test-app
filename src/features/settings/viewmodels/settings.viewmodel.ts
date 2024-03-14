import {
    UseMutateFunction,
    useMutation,
    UseMutationResult,
    useQuery,
    useQueryClient,
    UseQueryResult
} from "@tanstack/react-query";
import {getSettings as fetchSettings, switchLanguage} from "../../../shared/services/settings.service";
import {SettingsModel} from "../../../shared/models/SettingsModel";
import {TFunction} from "i18next";

export interface SettingsViewModel {
    getSettings: () => UseQueryResult<SettingsModel, Error>;
    changeLanguage:  UseMutateFunction<TFunction<"translation",undefined>,Error,string>;
}

/**
 * -------------------------------------------------------------
 * useSettingsViewModel - returns settings view model functions
 * -------------------------------------------------------------
 */
export const useSettingsViewModel = (): SettingsViewModel => {

    // Access the client
    const queryClient = useQueryClient();
    /**
     *  getSettings - fetch settings
     *  @return: SettingsModel
     */
    const getSettings = () => useQuery<SettingsModel,Error>({
        queryKey: ['getSettings'],
        queryFn: fetchSettings,
    });

    /**
     * changeLanguage - used to change current
     */
    const  changeLanguage: UseMutationResult<TFunction<"translation",undefined>,Error,string> = useMutation({
        mutationFn:switchLanguage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getSettings'] })
        }
    })

    return {
        getSettings,
        changeLanguage: changeLanguage.mutate
    }

}
