let parent = document.getElementsByTagName('tbody').item(0);
let childObj = parent.childNodes;
let childList = Object.values(childObj)


let arr=[]
childList.map((data,i)=>{
    let resultObj = new Object();
    resultObj.num=(Number(data.childNodes[1].getElementsByTagName('a').item(0).getElementsByTagName('img').item(0).src.split('/')[4].replace('.svg','')))
    resultObj.title=(data.childNodes[1].getElementsByTagName('a').item(0).innerText)
    arr.push(resultObj)

})
let sortArr=[]

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(arr[j].num===i){
            sortArr.push(arr[j])
        }
    }
    
}

sortArr.map((list,k)=>{
    console.log(k+1+"번 "+list.title)
})