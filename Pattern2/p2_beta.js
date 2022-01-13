var n = 4;
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
        
        if((Math.abs(i) + Math.abs(j)) <= (n + 1))
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