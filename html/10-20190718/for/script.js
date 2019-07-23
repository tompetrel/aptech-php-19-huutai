var array = ['s1', 's2', 's3', 's4', 's5'];

for(var i=0; i < array.length; i++){
    document.getElementById('p-' + i).innerHTML = array[i];
}