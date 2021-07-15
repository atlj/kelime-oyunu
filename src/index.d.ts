declare global {
    type Question = { answer: string; question: string };
    type Game = {
        name: string;
        time: number;
        questions: question[];
    };
}
