function inputN(N) {
    do {
        N = prompt("Nhap so phan tu cua mang; ");
    } while(N<=0||isNaN(N)==true);
    return N;
}
function inputArray(N, array) {
    for ( let i=0; i<N; i++){
        array[i] = prompt("Nhap phan tu so nguyen thu "+i+": ");
    }
}


function displayArray(array) {
    document.write("Mang vua nhap : ");
    for (let i = 0; i < array.length; i++) {
        document.write(array[i] +" ");
    }

}