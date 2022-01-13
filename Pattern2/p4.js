var n = 6;
var str = "";

for(i = -(n+1); i <= n+1; i++)
{
    for(j = -(n+1); j <= n+1; j++)
    {
        if(i == -(n+1) || i == n+1 || j == -(n+1) || j == n+1)
        {
            str += "0"
        }
        else if(Math.sign(i) == Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0 || j == 0)
        {
            //str += "*"
            str += String.fromCharCode((97 + Math.abs(i) - Math.abs(j)))
        }
        else if(Math.sign(i) != Math.sign(j) && Math.abs(i) - Math.abs(j) >= 0)
        {
            //str += "-"
            str += Math.abs(i) - Math.abs(j) + 1
        }
        else
        {
            str += " "
        }
    }
    str += "\n"
}
console.log(str);