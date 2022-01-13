var n = 9;
var str = "";

for(w = 0; w < 1; w++)
{
    for(b = -n; b <= 0; b++)
    {
        if (w == 0 && b == 0)
        {
            str += "o\n"
        }
        else
        {
            str += " "
        }
    }
}

for(level = 0; level < n-1; level++)
{
    for(i = 0; i < n; i++)
    {
        for(j = -n; j <= n; j++)
        {
            if(j==0)
            {
                str += "o"
            }
            else if(i+j == -1)
            {
                str += "/"
            }
            else if(j-i == 1)
            {
                str += "\\"
            }
            else if(Math.abs(i) - Math.abs(j) < n && Math.abs(i) - Math.abs(j) >= 0)
            {

                str += Math.abs(j)
            }
            else
            {
                str += " "
            }
        }
        str += "\n"
    }
}

for(u = 0; u < n; u++)
{
    for(v = -n; v <= n; v++)
    {
        if(v == 0)
        {
            str += "="
        }
        else if(Math.abs(v) == 2)
        {
            str += "|"
        }
        else
        {
            str += " "
        }
    }
    str += "\n"
}

for(p = 0; p < 1; p++)
{
    for(q = 0; q < 2*n + 1; q++)
    {
        str += "="
    }
}

console.log(str)


//-----------------------------------------------------------------------------------------


var n = 5;
var str = "";

for(w = 0; w < 1; w++)
{
    for(b = -n; b <= 0; b++)
    {
        if (w == 0 && b == 0)
        {
            str += "o\n"
        }
        else
        {
            str += " "
        }
    }
}

for(level = 0; level < n-1; level++)
{
    for(i = 0; i < n; i++)
    {
        for(j = -n; j <= n; j++)
        {
            if(i+j == -1)
            {
                str += "/"
            }
            else if(j-i == 1)
            {
                str += "\\"
            }
            else if(Math.abs(i) - Math.abs(j) < n && Math.abs(i) - Math.abs(j) >= 0)
            {
                str += "-"
            }
            else
            {
                str += " "
            }
        }
        str += "\n"
    }
}

for(u = 0; u < n; u++)
{
    for(v = -n; v <= n; v++)
    {
        if(v == 0)
        {
            str += "="
        }
        else if(Math.abs(v) == 2)
        {
            str += "|"
        }
        else
        {
            str += " "
        }
    }
    str += "\n"
}

for(p = 0; p < 1; p++)
{
    for(q = 0; q < 2*n + 1; q++)
    {
        str += "="
    }
}
console.log(str)


//--------------------------------------------------------------------------------------------


