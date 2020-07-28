export const required = (msg) => (value) => !!value || msg;
export const min = (min, msg) => (value) => Number(value) >= min || msg;