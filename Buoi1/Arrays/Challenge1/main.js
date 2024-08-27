function checkDogs(dogsJulia, dogsKate){
    const dogsJuliaCopy = dogsJulia.slice(1, -2); // Bỏ 1 phần tử đầu và 2 phần tử cuối
    const dogs = dogsJuliaCopy.concat(dogsKate);
    dogs.forEach((dog, i) => {
        const str = dog >= 3 ? `an adult, and is ${dog} years old` : `still a puppy 🐶`;
        console.log(`Dog number ${i + 1} is ${str}`);
    }); 
}

// Data 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);

// Data 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);