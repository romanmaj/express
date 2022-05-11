export const isEmpty = (str: string) => {
    return (!str || /^\s*$/.test(str));
}