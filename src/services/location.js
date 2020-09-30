export const DEFAULT_WEATHER_API = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api";
export const getLocationApi = (lat, lng) => `/location/search/?lattlong=${lat},${lng}`;

export const getCity = (lat, long) => {
    return fetch(`${DEFAULT_WEATHER_API}${getLocationApi(lat, long)}`)
        .then((response) => response.json())
}