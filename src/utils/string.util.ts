export const isEmptyString = (value: string) => {
    return (value.trim() === '' || value === null || value === undefined)
}