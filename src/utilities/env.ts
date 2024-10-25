type Environment = {
    VITE_RESUME_URL: string;
};

export function env(key: keyof Environment) {
    if (!(key in import.meta.env)) {
        throw new Error(`${key} does not exist.`);
    }

    return import.meta.env[key];
}
