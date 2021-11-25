function listArticles(){
    for(var i=0;i<istore.length;i++){
        addComponent(istore[i].page,istore[i].fileName,istore[i].title,istore[i].date,istore[i].about,istore[i].type);
    }
}
function addComponent(page,fileName,title,date,about,type){
    try{
        let textTemp=`
            <div class="innerCop_div" onclick="location='../contents/page_${page}/${fileName}.html'">
                <div class="innerImg_div" style="background-image: url(../imgs/page_${page}/${fileName.slice(0,3)}.JPG);"></div>
                <div class="innerWords_div">
                    <h2 class="innerTitle_h2">${title}</h2>
                    <h4 class="innerDate_h4">${date}</h4>
                    <p class="innerAbout_p">${about}</p>
                    <p class="type_p">type:<span>${type}</span></p>
                </div>
            </div>
        `
        document.querySelector(".body_section").innerHTML+=textTemp;
    }catch{
        let textTemp=`
        <div class="innerCop_div" onclick="location='../contents/page_${page}/${fileName}.html'">
            <div class="innerImg_div" style="background-image: url(../imgs/page_${page}/${fileName.slice(0,3)}.JPG);"></div>
            <div class="innerWords_div">
                <h2 class="innerTitle_h2">${title}</h2>
                <h4 class="innerDate_h4">${date}</h4>
                <p class="innerAbout_p">${about}</p>
                <p class="type_p">type:<span>${type}</span></p>
            </div>
        </div>
        `
        document.querySelector(".body_section").innerHTML+=textTemp;
    }
}
function addPages(all,current){
    var box=document.querySelector(".content_section");
    var textTemp="";
    textTemp+="<div class='pages_div'>";
    if(current!=1){
        textTemp+="<a class='bottomButton prev_button' href='mainPage_"+(current-1)+".html'><p>上一页</p></button>";
    }
    if(document.body.clientWidth >=800){
        for(var i=1;i<=all;i++){
            if(i!=current){
                textTemp+="<a class='bottomButton page_button' href='mainPage_"+i+".html'><p>"+i+"</p></button>";
            }else{
                textTemp+="<a class='bottomButton page_button' id='currentPage' href='#'><p>"+i+"</p></button>";
            }
        }
    }
    if(current!=all){
        textTemp+="<a class='bottomButton next_button' href='mainPage_"+(current+1)+".html'><p>下一页</p></button>";
    }
    textTemp+="</div>";
    box.innerHTML+=textTemp;
}