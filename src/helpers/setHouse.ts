export const setHouse = (house: string) => {
    const actualHouse: any = {
        Gryffindor: "linear-gradient(162deg, rgba(255,44,27,1) 0%, rgba(255,137,84,1) 85%)",
        Slytherin: "linear-gradient(160deg, rgba(33,127,45,1) 0%, rgba(128,230,93,1) 61%)",
        Hufflepuff: "linear-gradient(162deg, rgba(255,200,4,1) 0%, rgba(255,242,132,1) 85%)",
        Ravenclaw: "linear-gradient(162deg, rgba(10,153,186,1) 0%, rgba(98,207,252,1) 85%)",
        "": "black"
    }
    return actualHouse[house];
}