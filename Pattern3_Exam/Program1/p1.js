var n = 3;
 var str = "";

 for(level = 0; level < n; level++)
 {
    for(i = 0; i <= n; i++)
    {
        for(j = -n; j <= n; j++)
        {
            if(level == 0 && i == 0 && j == 0)
            {
                str += "o"
            }
            else if(i+j == 0 && i >= 1 && level < n-1)
            {
                str += "/"
            }
            else if(i-j == 0 && i >= 1 && level < n-1)
            (
                str += "\\"
            )
            else if(i - Math.abs(j) <= n && i - Math.abs(j) >= 0 && i >= 1 && level < n-1)
            {
                str += "-"
            }
            else if(level == n-1 && j == 0 || i == n)
            {
                str += "="
            }
            else if( level == n-1 && Math.abs(j) == 2)
            {
                str += "|"
            }
            else
            {
                str += " "
            }
        }

        if(i < n || level == n-2) 
        {
            str += "\n"
        }
    }
 }
 console.log(str);
