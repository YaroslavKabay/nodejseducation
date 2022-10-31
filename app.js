function fn(name,age) {
    return {
        name,
        age,
        sayHello: () => {
            console.log(`hello my name is ${name} and my age is ${age} `);
        }
    }
}
fn('lallal', 24)