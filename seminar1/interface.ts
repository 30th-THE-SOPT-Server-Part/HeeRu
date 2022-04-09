interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const serverPart: ServerPart = {
    name: '김후릐',
    age: 98,
    group: 'yb',
    mbti: ['ISFP', 'iOS']
};

console.log(serverPart);

const serverMembers: ServerPart[] = [
    {
        name: '유지원',
        age: 2500,
        group: 'ob',
        mbti: ['isfj', 'omoolen', 'server']
    },
    { 
        name: '구건모',
        age: 4800,
        group: 'ob',
        mbti: ['isfj', 'server']
    },
    {
        name: '조우찬',
        age: 3650,
        group: 'ob',
        mbti: ['istp', 'iOS 최고지']
    }
]

console.log(serverMembers);

// 선택적 프로퍼티 = 스위프트 옵셔널

interface Closet {
    name: String;
    shirt: number;
    hat?: number; // optional
}

const closet: Closet[] = [
    {
        name: '후릐의 옷장',
        shirt: 3,
    }
]

console.log(closet);