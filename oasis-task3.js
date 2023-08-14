var input_type=document.getElementById('input-type');
var input_label=document.getElementById('unit-input-label');
var input=document.getElementById('unit-input');
var result=document.getElementById('result');
var convert=document.getElementById('convert');
var unit=document.getElementById('unit');
var reset=document.getElementById('reset');
var count=0;
var ans;
input_type.addEventListener('change', function handleChange(event){
    if(input_type.value=="Farhenheit"){
        input_label.innerText="Farhenheit (In degrees)";
        unit.innerText='\u00B0C'
        count=1;
        input.value="";
        result.value="";
    };
    if(input_type.value=="Celsius"){
        input_label.innerText="Celsius (In degrees)";
        unit.innerText='\u00B0F';
        input.value="";
        result.value="";
    };
});    
reset.addEventListener('click',function(){
    input.value="";
    result.value="";
});
convert.addEventListener('click',function(){
    if(input.value==""||input.value==null){
        alert("Please enter the input");
    }
    else{
        if(input_type.value=="Farhenheit"){
            ans=(input.value-32)*(5/9);
            var output=ans.toFixed(3);
            result.value=output;
        }
        else{
           ans=((input.value*9)/5)+32;
           var output=ans.toFixed(3);
           result.value=output;
        }
    }
});
