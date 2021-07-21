export type Question = { answer: string; question: string };
export type Game = {
    name: string;
    time: number;
    questions: Question[];
};
