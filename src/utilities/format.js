export function formatCoords(data) {
    const coordArray = data.split(",");
    const newCoords = [coordArray[1], coordArray[0]];
    return newCoords;
}
