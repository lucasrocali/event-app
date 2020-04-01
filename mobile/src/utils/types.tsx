export type Speaker = {
    name: string,
    bio: string,
    img_url: string
}

export type Talk = {
    name: string,
    time: string,
    speaker: Speaker
}

export type RootStackParamList = {
    Talks: undefined;
    TalkDetail: { talk: Talk };
};