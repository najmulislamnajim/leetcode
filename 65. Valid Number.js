var isNumber = function(s) {
    // one number & last number check
    if(s.length===1&&s[0]!=0&&!parseInt(s[0])){
        return false;
    }else if(s[s.length-1]==="+"||s[s.length-1]==="-"||s[s.length-1]==="e"||s[s.length-1]==="E"){
        return false;
    }else{
        for(i=s.length-1;i>=0;i--){
            // char prob 
            if(s[i]==="+"||s[i]==="-"||s[i]==="e"||s[i]==="E"||s[i]==="."||s[i]==="0"){
                continue;
            }else if(!parseInt(s[i])){
                return false;
            }  
        }
        
        for(i=0;i<s.length;i++){
             // double -,+,. problem 
            if(s[i]==="-"||s[i]==="+"){
                if(s[i+1]=="-"||s[i+1]==="+"){
                    return false;
                }
            }
            if(s[i]==="."&&s[i+1]==="."){
                return false;
            }
        }
        // more than one .
        for(i=0;i<s.length;i++){
            for(j=i+1;j<s.length;j++){
                if(s[i]==="."&&s[j]===".") return false;
            }
        }
        if(s[s.length-1]==="."&& s[s.length-2]!=0&&!parseInt(s[s.length-2])){
            return false;
        }
        for(i=0;i<s.length;i++){
            // find e 
            if(s[i]==="e" || s[i]==="E"){
                var e=i;
                break;
            }
        }
        
        for(i=1;i<s.length;i++){
            if(e==undefined){
                if(s[i]==="+"||s[i]==="-"){
                    return false;
                }
            }else if(s[i]==="+"&&i!==e+1||s[i]==="-"&&i!==e+1){
                
                return false;
                
            }
        }
        // e related prob 
        if(s[0]==="e"||s[0]==="E"){
            return false;
        }
        if(e!=undefined){
            if(!parseInt(s[e-1])){
                if(s[e-1]!=0&&!parseInt(s[e-1])){
                    if(s[e-2]!=undefined&&!parseInt(s[e-2])){
                        return false;
                    }else if(s[e-2]!=undefined&&parseInt(s[e-2])){
        
                    }
                    else{
                        return false;
        
                    }
                }
            }
        }
        if(e+1===s.length){
            return false;
        }else{
            for(i=e+1;i<s.length;i++){
                if(s[e+1]==="+"||s[e+1]==="-"){
                    continue;
                }else if(s[i]==="0"){

                }else if(!parseInt(s[i])){
                    console.log("e prob-2");
                    return false;
                }
            }
        }
        return true;
    }   
};
