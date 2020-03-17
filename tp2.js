function celciusToFahrenheit(celcius)
{
    return (celcius*1.8)+32;
    
}
function limit(x, inf, sup){
    if ((x>=inf) && (x<=sup)){
        return x;
    }
    else if (x<inf){
        return inf;
    }
    else if (x>sup){
        return sup;
    }
}
function isPerfect(n){
    let count=0;
    let x;
    for (let i=1;i<n;i++){
        if (n%i==0){count+=i;}
    }
    count==n ? x=true : x=false;
    return x;
}
function toByte(x,unit){
    switch(unit){
        case 'K': return x*1024;
        case 'M': return x*1024 **2;
        case 'G': return x*1024 **3;
        case 'T': return x*1024 **4;
        default: break;
    }
   
}
function light(A1,A2,A3,A4,A5,A6){
    let x;
    //return true si allumée et false sinon
    //A==true si ouvert et false si fermé
    A1==true ? x=false : A3==true? x=false : x= true;
    if(x==true){return true;}
    A1==true ? x=false : A4==true? x=false : A4=true? x=false : x=true;
    if(x==true){return true;}
    A2==true ? x=false : A6==true? x=false : x=true;
    return x;
}
function number(n){
    let count=3;
    let d=0;
    while(count>=0){
        /*d=n%10;
        console.log(d);
        n=n/10;
        count--;*/
        
    }
}
function main(){
    console.log(light(true,false,true,true,true,false)); 	
   

}
main();