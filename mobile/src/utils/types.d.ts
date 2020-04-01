export type Speaker = {
    name: string,
    bio: string,
    img_url: string
}

export type Talk = {
    name: string,
    time: string,
    descp: string,
    speaker: Speaker
}

export type Day = {
    order: string,
    name: string
}

export type RootStackParamList = {
    TalkList: undefined;
    Talk: { talk: Talk };
};

export type Theme = {
    bgPrimaryColor: string,
    bgSecondaryColor: string,
    lblPrimaryColor: string,
    primaryColor: string,
    spacingTiny: string,
    spacingSmall: string,
    spacingMedium: string,
    spacingLarge: string
}