// var n = 4;
// var str = "";


// for(i = 0; i < n; i++)
// {
//     for(j = 0; j < n; j++)
//     {
//         if((i+j) >= (n-1))
//         {
//             str += "@"
//         }
//         else
//         {
//             str += " "
//         }
//     }
    
//     str += "\n"
// }
// //console.log(str);

// for(i = 0; i < n; i++)
// {
//     for(k = 0; k < n; k++)
//     {
//         str += " "
//     }
//     for(j = 0; j < n; j++)
//     {
//         if((i+j) < n)
//         str += "@"
//     }
//     str += "\n"
    
// }
// console.log(str);

var n = 6;
var str = "";

for(i = -n; i <= n; i++)
{
    if(i == 0)
    {
        continue;
    }
    for(j = -n; j <= n; j++)
    {
        if(j == 0)
        {
            continue;
        }
        
        if(((Math.abs(i) + Math.abs(j)) <= (n + 1)) && (Math.sign(i) == Math.sign(j)))
        {
            str += "@"
        }
        else{
            str += " "
        }
    }
    str += "\n"
}
console.log(str);