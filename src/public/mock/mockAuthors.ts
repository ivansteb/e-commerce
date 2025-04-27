export interface Author {
    name: string;
    isFollowing: boolean;
    image: string;
}

export const mockAuthors: Author[] = [
    {
        name: "Sofia Rodríguez",
        isFollowing: false,
        image: "https://picsum.photos/id/64/200/200"
    },
    {
        name: "Mateo González",
        isFollowing: false,
        image: "https://picsum.photos/id/91/200/200"
    },
    {
        name: "Valentina Pérez",
        isFollowing: false,
        image: "https://picsum.photos/id/26/200/200"
    },
    {
        name: "Benjamín López",
        isFollowing: false,
        image: "https://picsum.photos/id/22/200/200"
    },
    {
        name: "Isabella Martínez",
        isFollowing: false,
        image: "https://picsum.photos/id/57/200/200"
    },
    {
        name: "Lucas Hernández",
        isFollowing: false,
        image: "https://picsum.photos/id/43/200/200"
    },
    {
        name: "Emma Díaz",
        isFollowing: false,
        image: "https://picsum.photos/id/76/200/200"
    },
    {
        name: "Thiago Gómez",
        isFollowing: false,
        image: "https://picsum.photos/id/60/200/200"
    }
]