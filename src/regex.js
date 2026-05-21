export const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const regexName = /^[a-zA-ZęćłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/;

export const isValidField = (regex, field) => regex.test(field);