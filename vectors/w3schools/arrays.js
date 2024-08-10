const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
};

myObj.cars.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - ${item.models.join(" ")}`);
});

/*
Basic Array Methods
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()

See Also:
Search Methods
Sort Methods
Iteration Methods	Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()
*/