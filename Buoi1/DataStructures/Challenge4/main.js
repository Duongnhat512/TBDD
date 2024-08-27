document.addEventListener('DOMContentLoaded', function() {
    document.body.append(document.createElement('textarea'));
    document.body.append(document.createElement('button'));
    let texts = document.querySelector('textarea');
    
    document.querySelector('button').addEventListener('click', function() {
        let arr = texts.value.split("\n");
        let output;
    
        for (let i = 0; i < arr.length; i++){
            let [first, second] = arr[i].toLowerCase().trim().split('_');
            output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
            console.log(output);
        }
    });
});
