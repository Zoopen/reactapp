function add(a, b) {
    return parseInt(a) + parseInt(b);
}

if(!process.argv[2] || !process.argv[3]) {
    console.log('Insufficiet number of arguments! Give two numbers please')
}else {
    console.log('The sum of ', process.argv[2], 'and ', process.argv[3], 'is ', add(process.argv[2],process.argv[3]));
}