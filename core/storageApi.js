import AsyncStorage from "@react-native-async-storage/async-storage";
/**
 * 
 * @param {string} key 
 * @param {*} value
 * @returns 
 */
export async function storeData(key, value) {
    const res = await AsyncStorage.setItem(key, JSON.stringify(value), (error) => {
        if (!error) {
            return "Success"
        }
        return error
    });
    return res

}
/**
 * 
 * @param {string} key 
 * @returns 
 */
export async function getData(key) {
    const res = await AsyncStorage.getItem(key, (error, result) => {
        if (!error) {
            return JSON.parse(result)
        }
        return error
    })

    return res
}