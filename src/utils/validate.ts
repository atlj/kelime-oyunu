// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function validateGame(obj): boolean {
    let result = true;
    if (
        typeof obj !== "object" ||
        typeof obj.name !== "string" ||
        typeof obj.time !== "number" ||
        typeof obj.questions !== "object" || //Might be unnecessary
        !Array.isArray(obj.questions)
    ) {
        return false;
    }
    obj.questions.forEach((question) => {
        if (
            typeof question.answer !== "string" ||
            typeof question.question !== "string"
        ) {
            result = false;
        }
    });

    return result;
}

export { validateGame };
