// var n = 6;
// var str = "";

// for(i = 0; i < n; i++)
// {
//     for(j = 0; j < n - i - 1; j++)
//     {
//         str += " "
//     }
//     for(k = 0; k <= i; k++)
//     {
//         str += k + 1
//     }
//     for(l = i; l >= 1; l--)
//     {
//         str += l
//     }
//     str += "\n"
// }
// console.log(str)


var n = 7;
var str = "";

for(i = 0; i < n; i++)
{
    for(j = -n; j < n; j++)
    {
        if((Math.abs(i) - Math.abs(j) >= 0))
        {
        str += Math.abs(i) - Math.abs(j) + 1;
        }
    
        else
    {
        str += " ";
    }
}
    str += "\n"
}
console.log(str);