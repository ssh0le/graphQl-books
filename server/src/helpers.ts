const maxRandomValue = 10000;

export const findElementById = <T extends { id: string }>(
    elements: T[],
    id: string
): T | null => {
    const foundedElement = elements.find((element) => element.id === id);
    return foundedElement ?? null;
};

export const generateId = () => {
    return String(Math.floor(Math.random() * maxRandomValue));
};
