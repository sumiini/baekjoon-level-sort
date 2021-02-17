let parent = document.getElementsByTagName('tbody').item(0);
let childObj = parent.childNodes;
let childList = Object.values(childObj)
let arr=[]
let sortArr=[]
let str='';

childList.map((data,i)=>{
    let resultObj = new Object();
    resultObj.sol=(data.childNodes[0].innerText)
    //resultObj.num=(Number(data.childNodes[1].getElementsByTagName('a').item(0).getElementsByTagName('img').item(0).src.split('/')[4].replace('.svg','')))
    resultObj.num=(Number(data.childNodes[1].getElementsByTagName('a').item(0).getElementsByTagName('span').item(0).innerText))
    resultObj.title=(data.childNodes[1].getElementsByTagName('a').item(0).innerText)
    arr.push(resultObj)

})

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j].num===i){
            sortArr.push(arr[j])
        }
    }
}

sortArr.map((list,k)=>{
    str+=k+1+"번 "+list.sol+" "+list.title+'\n';
})

console.log(str)