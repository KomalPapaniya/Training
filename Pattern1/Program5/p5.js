// var n = 5;
// var str = "";

// for(i = 0; i < n; i++)
// {
//     for(j = 0; j < n - i - 1; j++)
//     {
//         str += " "
//     }
//     for(k = 0; k <= i; k++)
//     {
//         str += "*"
//     }
//     str += "\n"
// }
// console.log(str)

var n = 5;
var str = "";

for(i = 0; i < n; i++)
{
    for(j = 0; j < n; j++)
    {
        if((i + j) >= (n - 1))
        {
            str += "*"
        }
        else
        {
            str += " "
        }
    }
    str += "\n"
}
console.log(str);


