const { crawling_data } = require('./crawling');

crawling_data("https://www.kmou.ac.kr/coop/dv/dietView/selectDietDateView.do").then((result)=>{
    //학식
    const start = result.indexOf('<!-- 디테일Table -->');
    const end = result.indexOf('<!-- //서브콘텐츠 -->');
    result = result.substring(start,end);

    let menutable = result.split('</div>');
    menutable.shift();
    menutable.pop();
    menutable.pop();

    //2층
    const tb1start = menutable[0].indexOf('<tbody>');
    const tb1end = menutable[0].indexOf('</table>');
    let secondmenu = menutable[0].substring(tb1start,tb1end);
    let secondmenulist = secondmenu.split('<td class="ta_c">');
    secondmenulist.shift();
    //점심
    secondlunch1 = secondmenulist[0].replace(/<br\/>/g,'.');
    secondlunch2 = secondlunch1.replace(/<\/td>/g,'');
    secondlunch3 = secondlunch2.replace(/\s/g,'');
    secondlunch = secondlunch3.split('.');
    //저녁
    seconddinner1 = secondmenulist[1].replace(/<br\/>/g,'.');
    seconddinner2 = seconddinner1.replace(/<\/td>/g,'');
    seconddinner3 = seconddinner2.replace(/\s/g,'');
    seconddinner = seconddinner3.split('.');
    //일품식
    secondspecial1 = secondmenulist[2].replace(/<br\/>/g,'.');
    secondspecial2 = secondspecial1.replace(/<\/td>/g,'');
    secondspecial3 = secondspecial2.replace(/\s/g,'');
    secondspecial4 = secondspecial3.replace('</tbody>','');
    secondspecial = secondspecial4.split('.');

    //5층
    const tb3start = menutable[2].indexOf('<tbody>');
    const tb3end = menutable[2].indexOf('</table>');
    let fifthmenu = menutable[2].substring(tb3start,tb3end);
    let fifthmenulist = fifthmenu.split('<td class="ta_c">');
    fifthmenulist.shift();
    //점심
    fifthlunch1 = fifthmenulist[0].replace(/<br\/>/g,'.');
    fifthlunch2 = fifthlunch1.replace(/<\/td>/g,'');
    fifthlunch3 = fifthlunch2.replace(/\s/g,'');
    fifthlunch = fifthlunch3.split('.');
    //일품식
    fifthspecial1 = fifthmenulist[1].replace(/<br\/>/g,'.');
    fifthspecial2 = fifthspecial1.replace(/<\/td>/g,'');
    fifthspecial3 = fifthspecial2.replace(/\s/g,'');
    fifthspecial4 = fifthspecial3.replace('</tbody>','');
    fifthspecial = fifthspecial4.split('.');

    console.log('2층 점심 : ' + secondlunch);
    console.log('2층 저녁 : ' + seconddinner);
    console.log('2층 일품식 : ' + secondspecial);
    console.log('5층 점심 : ' + fifthlunch);
    console.log('5층 일품식 : ' + fifthspecial);
});

crawling_data("http://www.kmou.ac.kr/dorm/dv/dietView/selectDietDateView.do").then((result)=>{
    //긱식
    const dormstart = result.indexOf('<!-- 디테일Table -->');
    const dormend = result.indexOf('<!-- //서브콘텐츠 -->');
    result = result.substring(dormstart,dormend);
    
    const tbstart = result.indexOf('<tbody>');
    const tbend = result.indexOf('</table>');

    let dormmenu = result.substring(tbstart,tbend);
    dormmenulist = dormmenu.split('<td class="ta_c">');
    dormmenulist.shift();

    //아침
    dormbreakfast1 = secondmenulist[0].replace(/<br\/>/g,'.');
    dormbreakfast2 = dormbreakfast1.replace(/<\/td>/g,'');
    dormbreakfast3 = dormbreakfast2.replace(/\s/g,'');
    dormbreakfast = dormbreakfast3.split('.');
    
    //점심
    dormlunch1 = secondmenulist[1].replace(/<br\/>/g,'.');
    dormlunch2 = dormlunch1.replace(/<\/td>/g,'');
    dormlunch3 = dormlunch2.replace(/\s/g,'');
    dormlunch = dormlunch3.split('.');

    //저녁
    dormdinner1 = secondmenulist[2].replace(/<br\/>/g,'.');
    dormdinner2 = dormdinner1.replace(/<\/td>/g,'');
    dormdinner3 = dormdinner2.replace(/\s/g,'');
    dormdinner4 = dormdinner3.replace('</tbody>','');
    dormdinner = dormdinner4.split('.');

    console.log('기숙사 아침 : ' + dormbreakfast);
    console.log('기숙사 점심 : ' + dormlunch);
    console.log('기숙사 저녁 : ' + dormdinner);
});