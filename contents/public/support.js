function loadImg(page,fileNameSimple){
    document.querySelector(".header_section").innerHTML+=`
    <div class="innerImg_div" style="background-image: url(../../imgs/page_${page}/${fileNameSimple}.jpg);"></div>
    `;
}
function analyse(){
    let totalWords=0;
    let words=document.querySelector(".body_section pre").innerHTML;
    for(var i=0;i<words.length;i++){
        if(words[i]!=" "){
            totalWords++;
        }
    }
    let added="vezzzing呕心沥血所作";
    document.querySelector(".footer_section").innerHTML+=`
        <div class="words_div">共计:${totalWords}字</div>
        <div class="ad_div">${added}</div>
        <p class="add_p">谁叫你翻那么下面的( ´･･)ﾉ(._.\`)</div>
    `;
}