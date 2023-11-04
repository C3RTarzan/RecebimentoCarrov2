document.addEventListener("DOMContentLoaded", function() {
    nextInput()
    document.querySelector('select').addEventListener('change', function() {
        getData();
    });
    const data = new Date();
    const dateToday = document.querySelectorAll(".dateToday")
    for(let i = 0; i < dateToday.length; i++){
        dateToday[i].value = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
});


function getData(){   
    const dadosFormatados = [];
    const dadosFormatadoscoleta1 = [];
    const dadosFormatadoscoleta2 = [];
    const dadosFormatadoscoleta3 = [];
    const dadosFormatadoscoleta4 = [];
    const dadosFormatadoscoleta5 = [];
    const dadosFormatadoscoleta6 = [];
    const dadosFormatadoscoleta7 = [];
    const dadosFormatadoscoleta8 = [];
    const dadosFormatadoscoleta9 = [];
    const dadosFormatadoscoleta10 = [];

    for (let i = 1; i <= 10; i++) {
        const coleta = processarDados(i, i);
    
        if (i === 1) {
            dadosFormatadoscoleta1.push(...coleta);
        } else if (i === 2) {
            dadosFormatadoscoleta2.push(...coleta);
        } else if (i === 3) {
            dadosFormatadoscoleta3.push(...coleta);
        } else if (i === 4) {
            dadosFormatadoscoleta4.push(...coleta);
        } else if (i === 5) {
            dadosFormatadoscoleta5.push(...coleta);
        } else if (i === 6) {
            dadosFormatadoscoleta6.push(...coleta);
        } else if (i === 7) {
            dadosFormatadoscoleta7.push(...coleta);
        } else if (i === 8) {
            dadosFormatadoscoleta8.push(...coleta);
        } else if (i === 9) {
            dadosFormatadoscoleta9.push(...coleta);
        } else if (i === 10) {
            dadosFormatadoscoleta10.push(...coleta);
        }
    
        dadosFormatados.push(...coleta);
    }
    const count = getCount(dadosFormatados)
    const count1 = getCount(dadosFormatadoscoleta1)
    const count2 = getCount(dadosFormatadoscoleta2)
    const count3 = getCount(dadosFormatadoscoleta3)
    const count4 = getCount(dadosFormatadoscoleta4)
    const count5 = getCount(dadosFormatadoscoleta5)
    const count6 = getCount(dadosFormatadoscoleta6)
    const count7 = getCount(dadosFormatadoscoleta7)
    const count8 = getCount(dadosFormatadoscoleta8)
    const count9 = getCount(dadosFormatadoscoleta9)
    const count10 = getCount(dadosFormatadoscoleta10)
    getCollect(count,count1,count2,count3,count4,count5,count6,count7,count8,count9,count10)
}
function processarDados(coleta, coletaNumber) {
    const data = document.querySelector(`#data${coletaNumber}`).value.split('\n');
    const dadosFormatados = [];
    
    const datePriority = document.querySelector('.datePriority');
    
    for (let i = 0; i < data.length; i++) {
        const item = data[i].split('	');
        const route = item[0];
        const type = item[1];
        const date = item[2];

        dadosFormatados.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value,
            collect: coleta
        });
    }

    return dadosFormatados;
}
function getCount(route){
    let contTotal = 0, contEXP = 0, contSTD = 0
    let contFor = 0, contForEXP = 0, contForSTD  = 0
    let contForPriority = 0, contForEXPPriority = 0, contForSTDPriority  = 0
    let contCerTotal = 0, contCerEXP = 0, contCerSTD= 0
    let contSAO = 0, contSLX = 0, contPSX = 0, contBEC = 0, contSOB = 0, contBEP = 0, contBLM = 0
    let routeForCount = []
    let routeForCountEXP = []
    let routeForCountSTD = []
    let routeFor = []
    let collect;
    
    let rotaCER = [
        "AJU","ARM","APR","BHI","BHX",
        "BHZ","BSB","BSI","CER","CMP",
        "FEK","ITN","JPA","JPS","JZN",
        "LIN","MAC","MCE","NIG","NTA",
        "NTR","PRN","PTK","PTS","RAB",
        "REK","RIO","RRU","RZN","RZO",
        "RZS","SGI","SGP","SSA","TES",
        "VDC","VIX","VRO","VVA","VVL",
        "ZOE","VDQ","ENP"
    ]

    const routeCountsEXP = {
        'AJU': 0,'CER': 0,'FEK': 0,'ITN': 0,'JPA': 0,
        'JPS': 0,'NTA': 0,'PRN': 0,'REK': 0,'RRU': 0,
        'SSA': 0,'MAC': 0
    };
    const routeCountsSTD = {
        'BHX': 0,'BHI': 0,'BHZ': 0,'BSB': 0,'BSI': 0,
        'ENP': 0,'JZN': 0,'PTK': 0,'RZN': 0,'RZO': 0,
        'RZS': 0,'SGI': 0,'VDQ': 0,'SSA': 0,'RRU': 0,
        'REK': 0,'PRN': 0,'NTA': 0,'JPS': 0,'JPA': 0,
        'ITN': 0,'FEK': 0,'CER': 0,'AJU': 0,'VIX': 0,
        'MAC': 0,'RIO': 0
    };

    let routesEXP = [
        "AJU","CER","FEK","ITN","JPA",
        "JPS","NTA","PRN","REK","RRU",
        "SSA","MAC"
    ]
    let routeSTD = [
        'BHX','BHI','BHZ','BSB','BSI',
        'ENP','JZN','PTK','RZN','RZO',
        'RZS','SGI','VDQ','SSA','RRU',
        'REK','PRN','NTA','JPS','JPA',
        'ITN','FEK','CER','AJU','VIX',
        'MAC','RIO'
    ]

    let routePrimaryLoc
    for(let i = 0; i < route.length; i++){
        routePrimaryLoc = route[i].route.split('-');
        const datePriority = route[i].datePriority
        let valor = routePrimaryLoc[4]

        if(i == 0){
            collect = route[0].collect
        }
        
    
        if(routePrimaryLoc[1] != undefined){
            contTotal++
        }
        if(route[i].priority == "0"){
            contSTD++
            if (routeSTD.includes(routePrimaryLoc[1])) {
                routeCountsSTD[routePrimaryLoc[1]]++;
            }
            if (routePrimaryLoc[1] == 'ARP' ){
                routeCountsSTD['MAC']++;
            }
        }
        if(route[i].priority  == "6"){
            contEXP++
            if (routesEXP.includes(routePrimaryLoc[1])) {
                routeCountsEXP[routePrimaryLoc[1]]++;
            }
            if (routePrimaryLoc[1] == 'ARP' ){
                routeCountsEXP['MAC']++;
            }
        }
        if (routePrimaryLoc[1] == 'FOR' ){
            contFor++
            
            if (routeForCount[valor]) {
                routeForCount[valor]++;
            } else { 
                routeForCount[valor] = 1;
            }

            if(route[i].priority == "0"){
                contForSTD++       
                if (routeForCountSTD[valor]) {
                    routeForCountSTD[valor]++;
                } else { 
                    routeForCountSTD[valor] = 1;
                }
            }
            if(route[i].priority  == "6"){
                contForEXP++
                if (routeForCountEXP[valor]) {
                    routeForCountEXP[valor]++;
                } else { 
                    routeForCountEXP[valor] = 1;
                }
            }


            if(route[i].date == datePriority){
                contForPriority++
            
                if(route[i].priority == "0"){
                    contForSTDPriority++
                }
                if(route[i].priority  == "6"){
                    contForEXPPriority++
                }
            }
        }

        for(let b = 0; b < rotaCER.length; b++){ //CER
            if(rotaCER[b] == routePrimaryLoc[1]){
                contCerTotal++
                if(route[i].priority == "0"){
                    contCerSTD++
                }
                if(route[i].priority  == "6"){
                    contCerEXP++
                }
            }
        }   
        if (!rotaCER.includes(routePrimaryLoc[1]) && routePrimaryLoc[1] != 'FOR' && routePrimaryLoc[1] != 'SLX' && routePrimaryLoc[1] != 'PSX' && routePrimaryLoc[1] != 'BEC' && routePrimaryLoc[1] != 'SOB' && routePrimaryLoc[1] != 'BEP' && routePrimaryLoc[1] != 'BLM' && routePrimaryLoc[1] != 'ARP' && routePrimaryLoc[1] != undefined){ //SAO
            contSAO++;
        }
        if(routePrimaryLoc[1] == 'SLX'){
            contSLX++
        }
        if(routePrimaryLoc[1] == 'PSX'){
            contPSX++
        }
        if(routePrimaryLoc[1] == 'BEC'){
            contBEC++
        }
        if(routePrimaryLoc[1] == 'SOB'){
            contSOB++
        }
        if(routePrimaryLoc[1] == 'BEP'){
            contBEP++
        }
        if(routePrimaryLoc[1] == 'BLM'){
            contBLM++
        }
        
        
    }
    routeFor.push({
        For: routeForCount,
        ForEXP: routeForCountEXP,
        ForSTD: routeForCountSTD
    })
    return {
        Total: contTotal,
        EXP: contEXP,
        STD: contSTD,
        ForTotal: contFor,
        ForEXP: contForEXP,
        ForSTD: contForSTD,
        ForTotalPriority: contForPriority,
        ForEXPPriority: contForEXPPriority,
        ForSTDPriority: contForSTDPriority,
        CerTotal: contCerTotal,
        CerEXP: contCerEXP,
        CerSTD: contCerSTD,
        SAO: contSAO,
        SLX: contSLX,
        PSX: contPSX,
        BEC: contBEC,
        SOB: contSOB,
        BEP: contBEP,
        BLM: contBLM,
        routeEXP: routeCountsEXP,
        routeSTD: routeCountsSTD,
        collect: collect,
        routeFor: routeFor
    }
}
function getCollect(cl, cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10){
    const collect = document.querySelector('.collectSelect').value
    switch (collect) {
        case "all":
            collectionConfiguration(cl)
            setMessage(cl, cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10)
            Graphic(cl)
            setTable(cl.routeFor)
            break;
        case "collect1":
            collectionConfiguration(cl1)
            setMessage(null, cl1)
            Graphic(null, cl1)
            setTable(null, cl1.routeFor)
            break;
        case "collect2":
            collectionConfiguration(cl2)
            setMessage(null, null, cl2)
            Graphic(null, null, cl2)
            setTable(null, null, cl2.routeFor)
            break;
        case "collect3":
            collectionConfiguration(cl3)
            setMessage(null, null, null, cl3)
            Graphic(null, null, null, cl3)
            setTable(null, null, null, cl3.routeFor)
            break;
        case "collect4":
            collectionConfiguration(cl4)
            setMessage(null, null, null, null, cl4)
            Graphic(null, null, null, null, cl4)
            setTable(null, null, null, null, cl4.routeFor)
        break;
        case "collect5":
            collectionConfiguration(cl5)
            setMessage(null, null, null, null, null, cl5)
            Graphic(null, null, null, null, null, cl5)
            setTable(null, null, null, null, null, cl5.routeFor)
        break;
        case "collect6":
            collectionConfiguration(cl6)
            setMessage(null, null, null, null, null, null, cl6)
            Graphic(null, null, null, null, null, null, cl6)
            setTable(null, null, null, null, null, null, cl6.routeFor)
        break;
        case "collect7":
            collectionConfiguration(cl7)
            setMessage(null, null, null, null, null, null, null, cl7)
            Graphic(null, null, null, null, null, null, null, cl7)
            setTable(null, null, null, null, null, null, null, cl7.routeFor)
        break;
        case "collect8":
            collectionConfiguration(cl8)
            setMessage(null, null, null, null, null, null, null, null, cl8)
            Graphic(null, null, null, null, null, null, null, null, cl8)
            setTable(null, null, null, null, null, null, null, null, cl8.routeFor)
        break;
        case "collect9":
            collectionConfiguration(cl9)
            setMessage(null, null, null, null, null, null, null, null, null, cl9)
            Graphic(null, null, null, null, null, null, null, null, null, cl9)
            setTable(null, null, null, null, null, null, null, null, null, cl9.routeFor)
        break;
        case "collect10":
            collectionConfiguration(cl10)
            setMessage(null, null, null, null, null, null, null, null, null, null, cl10)
            Graphic(null, null, null, null, null, null, null, null, null, null, cl10)
            setTable(null, null, null, null, null, null, null, null, null, null, cl10.routeFor)
        break;
        default:
            console.log("Opção desconhecida");   
    }
    
}
function collectionConfiguration(collect){
    const contSTD = document.querySelector('.contSTD')
    const contEXP = document.querySelector('.contEXP')
    const contTotal = document.querySelector('.contTotal')

    const contForSTD = document.querySelector('.contForSTD')
    const contForEXP = document.querySelector('.contForEXP')
    const contFor = document.querySelector('.contFor')

    const contForSTDPriority = document.querySelector('.contForSTDPriority')
    const contForEXPPriority = document.querySelector('.contForEXPPriority')
    const contForPriority = document.querySelector('.contForPriority')

    const contCerSTD = document.querySelector('.contCerSTD')
    const contCerEXP = document.querySelector('.contCerEXP')
    const contCerTotal = document.querySelector('.contCerTotal')

    const SAO = document.querySelector('.SAO')
    const SLX = document.querySelector('.SLX')
    const PSX = document.querySelector('.PSX')
    const BEC = document.querySelector('.BEC')
    const SOB = document.querySelector('.SOB')
    const BEP = document.querySelector('.BEP')
    const BLM = document.querySelector('.BLM')

    const AJU = document.querySelector('.AJU')
    const FEK = document.querySelector('.FEK')
    const JPA = document.querySelector('.JPA')
    const NTA = document.querySelector('.NTA')
    const REK = document.querySelector('.REK')
    const SSA = document.querySelector('.SSA')
    const CER = document.querySelector('.CER')
    const ITN = document.querySelector('.ITN')
    const JPS = document.querySelector('.JPS')
    const PRN = document.querySelector('.PRN')
    const RRU = document.querySelector('.RRU')
    const MAC = document.querySelector('.MAC')
    const FOR = document.querySelector('.FOR')
    const TOTAL = document.querySelector('.TOTAL')

    const BHX_STD  = document.querySelector('.BHX_STD')
    const BHI_STD  = document.querySelector('.BHI_STD')
    const BHZ_STD  = document.querySelector('.BHZ_STD')
    const BSB_STD  = document.querySelector('.BSB_STD')
    const BSI_STD  = document.querySelector('.BSI_STD')
    const ENP_STD  = document.querySelector('.ENP_STD')
    const JZN_STD  = document.querySelector('.JZN_STD')
    const PTK_STD  = document.querySelector('.PTK_STD')
    const RZN_STD  = document.querySelector('.RZN_STD')
    const RZO_STD  = document.querySelector('.RZO_STD')
    const RZS_STD  = document.querySelector('.RZS_STD')
    const SGI_STD  = document.querySelector('.SGI_STD')
    const VDQ_STD  = document.querySelector('.VDQ_STD')
    const SSA_STD = document.querySelector('.SSA_STD')
    const RRU_STD = document.querySelector('.RRU_STD')
    const REK_STD = document.querySelector('.REK_STD')
    const PRN_STD = document.querySelector('.PRN_STD')
    const NTA_STD = document.querySelector('.NTA_STD')
    const JPS_STD = document.querySelector('.JPS_STD')
    const JPA_STD = document.querySelector('.JPA_STD')
    const ITN_STD = document.querySelector('.ITN_STD')
    const FEK_STD = document.querySelector('.FEK_STD')
    const CER_STD = document.querySelector('.CER_STD')
    const AJU_STD = document.querySelector('.AJU_STD')
    const VIX_STD = document.querySelector('.VIX_STD')
    const RIO_STD = document.querySelector('.RIO_STD')
    const MAC_STD = document.querySelector('.MAC_STD')
    const FOR_STD = document.querySelector('.FOR_STD')
    const TOTAL_STD = document.querySelector('.TOTAL_STD')

    contSTD.value = collect.STD
    contEXP.value = collect.EXP
    contTotal.value = collect.Total

    contForSTD.value = collect.ForSTD
    contForEXP.value = collect.ForEXP
    contFor.value = collect.ForTotal

    contForSTDPriority.value = collect.ForSTDPriority
    contForEXPPriority.value = collect.ForEXPPriority
    contForPriority.value = collect.ForTotalPriority

    contCerSTD.value = collect.CerSTD
    contCerEXP.value = collect.CerEXP
    contCerTotal.value = collect.CerTotal

    SAO.value = collect.SAO
    SLX.value = collect.SLX
    PSX.value = collect.PSX
    BEC.value = collect.BEC
    SOB.value = collect.SOB
    BEP.value = collect.BEP
    BLM.value = collect.BLM

    AJU.value = collect.routeEXP.AJU
    FEK.value = collect.routeEXP.FEK
    JPA.value = collect.routeEXP.JPA
    NTA.value = collect.routeEXP.NTA
    REK.value = collect.routeEXP.REK
    SSA.value = collect.routeEXP.SSA
    CER.value = collect.routeEXP.CER
    ITN.value = collect.routeEXP.ITN
    JPS.value = collect.routeEXP.JPS
    PRN.value = collect.routeEXP.PRN
    RRU.value = collect.routeEXP.RRU
    MAC.value = collect.routeEXP.MAC
    FOR.value = collect.ForEXP
    TOTAL.value = collect.EXP

    BHX_STD.value = collect.routeSTD.BHX
    BHI_STD.value = collect.routeSTD.BHI
    BHZ_STD.value = collect.routeSTD.BHZ
    BSB_STD.value = collect.routeSTD.BSB
    BSI_STD.value = collect.routeSTD.BSI
    ENP_STD.value = collect.routeSTD.ENP
    JZN_STD.value = collect.routeSTD.JZN
    PTK_STD.value = collect.routeSTD.PTK
    RZO_STD.value = collect.routeSTD.RZO
    RZS_STD.value = collect.routeSTD.RZS
    SGI_STD.value = collect.routeSTD.SGI
    VDQ_STD.value = collect.routeSTD.VDQ
    SSA_STD.value = collect.routeSTD.SSA
    RRU_STD.value = collect.routeSTD.RRU
    REK_STD.value = collect.routeSTD.REK
    PRN_STD.value = collect.routeSTD.PRN
    NTA_STD.value = collect.routeSTD.NTA
    JPS_STD.value = collect.routeSTD.JPS
    JPA_STD.value = collect.routeSTD.JPA
    ITN_STD.value = collect.routeSTD.ITN
    FEK_STD.value = collect.routeSTD.FEK
    CER_STD.value = collect.routeSTD.CER
    AJU_STD.value = collect.routeSTD.AJU
    VIX_STD.value = collect.routeSTD.VIX
    RIO_STD.value = collect.routeSTD.RIO
    MAC_STD.value = collect.routeSTD.MAC
    FOR_STD.value = collect.ForSTD
    TOTAL_STD.value = collect.STD
}
function setMessage(collect, collect1, collect2, collect3, collect4, collect5, collect6, collect7, collect8, collect9, collect10){
    console.log(collect6);
    console.log(collect1);
    const name = document.querySelector('#name').value
    const arrivalTime = document.querySelectorAll('.arrivalTime')
    const dateArrived = document.querySelector('.dateArrived')
    const datePriority = document.querySelector('.datePriority')
    const collectSTD = document.querySelectorAll('.collectSTD')
    const collectEXP = document.querySelectorAll('.collectEXP')
    const VRID = document.querySelectorAll('.VRID')
    const sheetQuantity = document.querySelectorAll('.sheetQuantity')

    const withTheTable = document.querySelector(".withTheTable")
    const withTheLeaf = document.querySelector('.withTheLeaf')
    const withGraphic = document.querySelector('.withGraphic')
    const theTruck = document.querySelector('.theTruck')
    if(collect != undefined && collect1 != undefined && collect2 != undefined && collect3 != undefined && collect4 != undefined && collect5 != undefined && collect6 != undefined && collect7 != undefined && collect8 != undefined && collect9 != undefined && collect10 != undefined ){
        let p = 1
        let html = ''

        let collectSTDLocal
        if(collect10.Total > 0){
            p = 10
        }
        else if(collect9.Total > 0){
            p = 9
        }
        else if(collect8.Total > 0){
            p = 8
        }
        else if(collect7.Total > 0){
            p = 7
        }
        else if(collect6.Total > 0){
            p = 6
        }
        else if(collect5.Total > 0){
            p = 5
        }
        else if(collect4.Total > 0){
            p = 4
        }
        else if(collect3.Total > 0){
            p = 3
        }
        else if(collect2.Total > 0){
            p = 2
        }
        html += `Coleta Amazon FOR2 -> TEXBR *${dateArrived.value}* <span style="display: none;">br</span>
        
        `
        for(let y = 1; y <= p; y++){
            if(y == 1){
                collectSTDLocal = collect1
            }else if(y == 2){
                collectSTDLocal = collect2
            }
            else if(y == 3){
                collectSTDLocal = collect3
            }
            else if(y == 4){
                collectSTDLocal = collect4
            }
            else if(y == 5){
                collectSTDLocal = collect5
            }
            else if(y == 6){
                collectSTDLocal = collect6
            }
            else if(y == 7){
                collectSTDLocal = collect7
            }
            else if(y == 8){
                collectSTDLocal = collect7
            }
            else if(y == 9){
                collectSTDLocal = collect9
            }
            else if(y == 10){
                collectSTDLocal = collect10
            }
            if(collect2.Total > 0){
                html += 
                    `${y}° Coleta Amazon... *${arrivalTime[y - 1].value}h* *${collectSTDLocal.Total}*/*${collectSTDLocal.ForTotal}* <span style="display: none;">br</span>
    
                    *${collectSTD[y - 1].value}* STD *${collectSTDLocal.STD}*
                    *${collectEXP[y - 1].value}* EXP *${collectSTDLocal.EXP}* <span style="display: none;">br</span>
                    
                    `
            }else{
                html += 
                    `${y}° Coleta Amazon... *${arrivalTime[y - 1].value}h*<span style="display: none;">br</span>
    
                    *${collectSTD[y - 1].value}* STD *${collectSTDLocal.STD}*
                    *${collectEXP[y - 1].value}* EXP *${collectSTDLocal.EXP}* <span style="display: none;">br</span>
                    
                    `
            }
            
        }

        html += `TOTAL: *${collect.Total}*/*${collect.ForTotal}* <span style="display: none;">br</span>

        ~*${name}*
        `
        withTheTable.innerHTML = html
    }
    if(collect != undefined && collect1 != undefined && collect2 != undefined && collect3 != undefined && collect4 != undefined && collect5 != undefined && collect6 != undefined && collect7 != undefined && collect8 != undefined && collect9 != undefined && collect10 != undefined ){
        let y = 0
        let html2 = ''
        let html3 = ''
        let html4 = ''
        let sheetQuantityLocal = 0

        if(collect10.Total > 0){
            p = 10
        }
        else if(collect9.Total > 0){
            p = 9
        }
        else if(collect8.Total > 0){
            p = 8
        }
        else if(collect7.Total > 0){
            p = 7
        }
        else if(collect6.Total > 0){
            p = 6
        }
        else if(collect5.Total > 0){
            p = 5
        }
        else if(collect4.Total > 0){
            p = 4
        }
        else if(collect3.Total > 0){
            p = 3
        }
        else if(collect2.Total > 0){
            p = 2
        }

        
        if(collect2.Total > 0){
            sheetQuantityLocal += parseInt(sheetQuantity[0].value) + parseInt(sheetQuantity[1].value) 
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*)`
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}* 
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}* 
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.`
        }
        if(collect3.Total > 0){
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*) / *${VRID[2].value}* (*${sheetQuantity[2].value}*)`
            sheetQuantityLocal += parseInt(sheetQuantity[2].value)
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}* 
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}* 
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.
            
            3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}* 
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.`
        }
        if(collect4.Total > 0){
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*) / *${VRID[2].value}* (*${sheetQuantity[2].value}*) / *${VRID[3].value}* (*${sheetQuantity[3].value}*)`
            sheetQuantityLocal += parseInt(sheetQuantity[3].value) 
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}* 
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.
            
            3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}* 
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.
            
            4° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}* 
            Horario: *${arrivalTime[3].value}*
            VRID: *${VRID[3].value}*
            Qntd: *${sheetQuantity[3].value}*.`
        }
        if(collect5.Total > 0){
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*) / *${VRID[2].value}* (*${sheetQuantity[2].value}*) / *${VRID[3].value}* (*${sheetQuantity[3].value}*) / *${VRID[4].value}* (*${sheetQuantity[4].value}*)`
            sheetQuantityLocal += parseInt(sheetQuantity[4].value)
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.
            
            3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.
            
            4° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[3].value}*
            VRID: *${VRID[3].value}*
            Qntd: *${sheetQuantity[3].value}*.
            
            5° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[4].value}*
            VRID: *${VRID[4].value}*
            Qntd: *${sheetQuantity[4].value}*.`
        }
        if(collect6.Total > 0){
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*) / *${VRID[2].value}* (*${sheetQuantity[2].value}*) / *${VRID[3].value}* (*${sheetQuantity[3].value}*) / *${VRID[4].value}* (*${sheetQuantity[4].value} / *${VRID[5].value}* (*${sheetQuantity[5].value}*)`
            sheetQuantityLocal += parseInt(sheetQuantity[4].value)
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.
            
            3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.
            
            4° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[3].value}*
            VRID: *${VRID[3].value}*
            Qntd: *${sheetQuantity[3].value}*.
            
            5° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[4].value}*
            VRID: *${VRID[4].value}*
            Qntd: *${sheetQuantity[4].value}*.
            
            6° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[5].value}*
            VRID: *${VRID[5].value}*
            Qntd: *${sheetQuantity[5].value}*.
            `
            
        }
        if(collect7.Total > 0){
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*) / *${VRID[2].value}* (*${sheetQuantity[2].value}*) / *${VRID[3].value}* (*${sheetQuantity[3].value}*) / *${VRID[4].value}* (*${sheetQuantity[4].value}*) / *${VRID[5].value}* (*${sheetQuantity[5].value}*) / *${VRID[6].value}* (*${sheetQuantity[6].value}*)`
            sheetQuantityLocal += parseInt(sheetQuantity[4].value)
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.
            
            3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.
            
            4° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[3].value}*
            VRID: *${VRID[3].value}*
            Qntd: *${sheetQuantity[3].value}*.
            
            5° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[4].value}*
            VRID: *${VRID[4].value}*
            Qntd: *${sheetQuantity[4].value}*.

            6° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[5].value}*
            VRID: *${VRID[5].value}*
            Qntd: *${sheetQuantity[5].value}*.
            
            7° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[6].value}*
            VRID: *${VRID[6].value}*
            Qntd: *${sheetQuantity[6].value}*.`
        }
        if(collect8.Total > 0){
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*) / *${VRID[2].value}* (*${sheetQuantity[2].value}*) / *${VRID[3].value}* (*${sheetQuantity[3].value}*) / *${VRID[4].value}* (*${sheetQuantity[4].value}*) / *${VRID[5].value}* (*${sheetQuantity[5].value}*) / *${VRID[6].value}* (*${sheetQuantity[6].value}*) / *${VRID[7].value}* (*${sheetQuantity[7].value}*)`
            sheetQuantityLocal += parseInt(sheetQuantity[4].value)
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.
            
            3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.
            
            4° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[3].value}*
            VRID: *${VRID[3].value}*
            Qntd: *${sheetQuantity[3].value}*.
            
            5° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[4].value}*
            VRID: *${VRID[4].value}*
            Qntd: *${sheetQuantity[4].value}*.
            
            6° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[5].value}*
            VRID: *${VRID[5].value}*
            Qntd: *${sheetQuantity[5].value}*.
            
            7° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[6].value}*
            VRID: *${VRID[6].value}*
            Qntd: *${sheetQuantity[6].value}*.

            8° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[7].value}*
            VRID: *${VRID[7].value}*
            Qntd: *${sheetQuantity[7].value}*.`
        }
        if(collect9.Total > 0){
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*) / *${VRID[2].value}* (*${sheetQuantity[2].value}*) / *${VRID[3].value}* (*${sheetQuantity[3].value}*) / *${VRID[4].value}* (*${sheetQuantity[4].value}*) / *${VRID[5].value}* (*${sheetQuantity[5].value}*) / *${VRID[6].value}* (*${sheetQuantity[6].value}*) / *${VRID[7].value}* (*${sheetQuantity[7].value}*) / *${VRID[8].value}* (*${sheetQuantity[8].value}*)`
            sheetQuantityLocal += parseInt(sheetQuantity[4].value)
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.
            
            3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.
            
            4° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[3].value}*
            VRID: *${VRID[3].value}*
            Qntd: *${sheetQuantity[3].value}*.
            
            5° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[4].value}*
            VRID: *${VRID[4].value}*
            Qntd: *${sheetQuantity[4].value}*.
            
            6° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[5].value}*
            VRID: *${VRID[5].value}*
            Qntd: *${sheetQuantity[5].value}*.
            
            7° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[6].value}*
            VRID: *${VRID[6].value}*
            Qntd: *${sheetQuantity[6].value}*.

            8° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[7].value}*
            VRID: *${VRID[7].value}*
            Qntd: *${sheetQuantity[7].value}*.

            9° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[8].value}*
            VRID: *${VRID[8].value}*
            Qntd: *${sheetQuantity[8].value}*.`
        }
        if(collect10.Total > 0){
            html2 = `O VRID: *${VRID[0].value}* (*${sheetQuantity[0].value}*) / *${VRID[1].value}* (*${sheetQuantity[1].value}*) / *${VRID[2].value}* (*${sheetQuantity[2].value}*) / *${VRID[3].value}* (*${sheetQuantity[3].value}*) / *${VRID[4].value}* (*${sheetQuantity[4].value}*) / *${VRID[5].value}* (*${sheetQuantity[5].value}*) / *${VRID[6].value}* (*${sheetQuantity[6].value}*) / *${VRID[7].value}* (*${sheetQuantity[7].value}*) / *${VRID[8].value}* (*${sheetQuantity[8].value}*) / *${VRID[9].value}* (*${sheetQuantity[9].value}*)`
            sheetQuantityLocal += parseInt(sheetQuantity[4].value)
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.

            2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.
            
            3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.
            
            4° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[3].value}*
            VRID: *${VRID[3].value}*
            Qntd: *${sheetQuantity[3].value}*.
            
            5° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[4].value}*
            VRID: *${VRID[4].value}*
            Qntd: *${sheetQuantity[4].value}*.
            6° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[5].value}*
            VRID: *${VRID[5].value}*
            Qntd: *${sheetQuantity[5].value}*.
            
            7° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[6].value}*
            VRID: *${VRID[6].value}*
            Qntd: *${sheetQuantity[6].value}*.

            8° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[7].value}*
            VRID: *${VRID[7].value}*
            Qntd: *${sheetQuantity[7].value}*.

            9° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[8].value}*
            VRID: *${VRID[8].value}*
            Qntd: *${sheetQuantity[8].value}*.

            10° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[9].value}*
            VRID: *${VRID[9].value}*
            Qntd: *${sheetQuantity[9].value}*.`
        }
        if (collect2.Total > 0){
            html2 += `
            somados deram exatos *${sheetQuantityLocal}*, porém como sabemos da divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *"${collect.Total}"* AWB'
            deixando um total de *${parseInt(collect.Total) - parseInt(sheetQuantityLocal)}* AWB's fora do informativo do VRID.`
            html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
            Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

            MH vem recebendo um total de *${collect.ForTotal}* peças locais, sendo  elas *${collect.ForSTD}* STD e *${collect.ForEXP}* EXP
            como mostrados na tabela acima.
            Hoje estamos recebendo um total de *${collect.ForTotalPriority}* prioridades sendo elas *${collect.ForEXPPriority}* EXP e *${collect.ForSTDPriority}* STD,
            a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

            STD: *${collect.STD}*
            EXP: *${collect.EXP}*<span style="display: none;">br</span>

            *AWB'S EXTRAS*: SLX: *${collect.SLX}* | PSX: *${collect.PSX}* | BEC: *${collect.BEC}* | SOB: *${collect.SOB}* | BEP: *${collect.BEP}* | BLM: *${collect.BLM}*<span style="display: none;">br</span>

            ~*${name}.*`
        }else{
            html2 = `O VRID: *${VRID[0].value}* deu exatos *${sheetQuantity[0].value}*, porém como sabemos da
            divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect.Total}* AWB'
            deixando um total de *${parseInt(collect1.Total - sheetQuantity[0].value)}* AWB's fora do informativo do VRID.`

            html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
            Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

            MH vem recebendo um total de *${collect1.ForTotal}* peças locais, sendo  elas *${collect1.ForSTD}* STD e *${collect1.ForEXP}* EXP
            como mostrados na tabela acima.
            Hoje estamos recebendo um total de *${collect1.ForTotalPriority}* prioridades sendo elas *${collect1.ForEXPPriority}* EXP e *${collect1.ForSTDPriority}* STD,
            a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

            STD: *${collect1.STD}*
            EXP: *${collect1.EXP}*<span style="display: none;">br</span>

            *AWB'S EXTRAS*: SLX: *${collect1.SLX}* | PSX: *${collect1.PSX}* | BEC: *${collect1.BEC}* | SOB: *${collect1.SOB}* | BEP: *${collect1.BEP}* | BLM: *${collect1.BLM}*<span style="display: none;">br</span>

            ~*${name}.*`
            html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.`
        }
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect1 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[0].value}* deu exatos *${sheetQuantity[0].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect1.Total}* AWB'
        deixando um total de *${parseInt(collect1.Total - sheetQuantity[0].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">1</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[0].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[0].value}</span>* STD *<span class="collectSTDValueMSG">${collect1.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[0].value}</span>* EXP *<span class="collectEXPValueMSG">${collect1.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect1.Total}</span>*/*<span class="TotalForMSG">${collect1.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect1.ForTotal}* peças locais, sendo  elas *${collect1.ForSTD}* STD e *${collect1.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect1.ForTotalPriority}* prioridades sendo elas *${collect1.ForEXPPriority}* EXP e *${collect1.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect1.STD}*
        EXP: *${collect1.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect1.SLX}* | PSX: *${collect1.PSX}* | BEC: *${collect1.BEC}* | SOB: *${collect1.SOB}* | BEP: *${collect1.BEP}* | BLM: *${collect1.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `1° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[0].value}*
            VRID: *${VRID[0].value}*
            Qntd: *${sheetQuantity[0].value}*.`

        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect2 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[1].value}* deu exatos *${sheetQuantity[1].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect2.Total}* AWB'
        deixando um total de *${parseInt(collect2.Total - sheetQuantity[1].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">2</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[1].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[1].value}</span>* STD *<span class="collectSTDValueMSG">${collect2.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[1].value}</span>* EXP *<span class="collectEXPValueMSG">${collect2.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect2.Total}</span>*/*<span class="TotalForMSG">${collect2.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect2.ForTotal}* peças locais, sendo  elas *${collect2.ForSTD}* STD e *${collect2.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect2.ForTotalPriority}* prioridades sendo elas *${collect2.ForEXPPriority}* EXP e *${collect2.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect2.STD}*
        EXP: *${collect2.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect2.SLX}* | PSX: *${collect2.PSX}* | BEC: *${collect2.BEC}* | SOB: *${collect2.SOB}* | BEP: *${collect2.BEP}* | BLM: *${collect2.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `2° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[1].value}*
            VRID: *${VRID[1].value}*
            Qntd: *${sheetQuantity[1].value}*.`

        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
        
    }
    else if(collect3 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[2].value}* deu exatos *${sheetQuantity[2].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect3.Total}* AWB'
        deixando um total de *${parseInt(collect3.Total - sheetQuantity[2].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">3</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[2].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[2].value}</span>* STD *<span class="collectSTDValueMSG">${collect3.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[2].value}</span>* EXP *<span class="collectEXPValueMSG">${collect3.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect3.Total}</span>*/*<span class="TotalForMSG">${collect3.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect3.ForTotal}* peças locais, sendo  elas *${collect3.ForSTD}* STD e *${collect3.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect3.ForTotalPriority}* prioridades sendo elas *${collect3.ForEXPPriority}* EXP e *${collect3.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect3.STD}*
        EXP: *${collect3.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect3.SLX}* | PSX: *${collect3.PSX}* | BEC: *${collect3.BEC}* | SOB: *${collect3.SOB}* | BEP: *${collect3.BEP}* | BLM: *${collect3.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `3° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[2].value}*
            VRID: *${VRID[2].value}*
            Qntd: *${sheetQuantity[2].value}*.`

        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect4 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[3].value}* deu exatos *${sheetQuantity[3].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect4.Total}* AWB'
        deixando um total de *${parseInt(collect4.Total - sheetQuantity[3].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">4</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[3].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[3].value}</span>* STD *<span class="collectSTDValueMSG">${collect4.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[3].value}</span>* EXP *<span class="collectEXPValueMSG">${collect4.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect4.Total}</span>*/*<span class="TotalForMSG">${collect4.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect4.ForTotal}* peças locais, sendo  elas *${collect4.ForSTD}* STD e *${collect4.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect4.ForTotalPriority}* prioridades sendo elas *${collect4.ForEXPPriority}* EXP e *${collect4.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect4.STD}*
        EXP: *${collect4.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect4.SLX}* | PSX: *${collect4.PSX}* | BEC: *${collect4.BEC}* | SOB: *${collect4.SOB}* | BEP: *${collect4.BEP}* | BLM: *${collect4.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `4° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[3].value}*
            VRID: *${VRID[3].value}*
            Qntd: *${sheetQuantity[3].value}*.`

        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect5 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[4].value}* deu exatos *${sheetQuantity[4].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect5.Total}* AWB'
        deixando um total de *${parseInt(collect5.Total - sheetQuantity[4].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">5</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[4].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[4].value}</span>* STD *<span class="collectSTDValueMSG">${collect5.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[4].value}</span>* EXP *<span class="collectEXPValueMSG">${collect5.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect5.Total}</span>*/*<span class="TotalForMSG">${collect5.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect5.ForTotal}* peças locais, sendo  elas *${collect5.ForSTD}* STD e *${collect5.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect5.ForTotalPriority}* prioridades sendo elas *${collect5.ForEXPPriority}* EXP e *${collect5.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect5.STD}*
        EXP: *${collect5.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect5.SLX}* | PSX: *${collect5.PSX}* | BEC: *${collect5.BEC}* | SOB: *${collect5.SOB}* | BEP: *${collect5.BEP}* | BLM: *${collect5.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `5° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[4].value}*
            VRID: *${VRID[4].value}*
            Qntd: *${sheetQuantity[4].value}*.`
        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect6 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[5].value}* deu exatos *${sheetQuantity[5].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect6.Total}* AWB'
        deixando um total de *${parseInt(collect6.Total - sheetQuantity[5].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">6</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[5].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[5].value}</span>* STD *<span class="collectSTDValueMSG">${collect6.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[5].value}</span>* EXP *<span class="collectEXPValueMSG">${collect6.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect6.Total}</span>*/*<span class="TotalForMSG">${collect6.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect6.ForTotal}* peças locais, sendo  elas *${collect6.ForSTD}* STD e *${collect6.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect6.ForTotalPriority}* prioridades sendo elas *${collect6.ForEXPPriority}* EXP e *${collect6.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect6.STD}*
        EXP: *${collect6.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect6.SLX}* | PSX: *${collect6.PSX}* | BEC: *${collect6.BEC}* | SOB: *${collect6.SOB}* | BEP: *${collect6.BEP}* | BLM: *${collect6.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `6° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[5].value}*
            VRID: *${VRID[5].value}*
            Qntd: *${sheetQuantity[5].value}*.`
        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect7 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[6].value}* deu exatos *${sheetQuantity[6].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect7.Total}* AWB'
        deixando um total de *${parseInt(collect7.Total - sheetQuantity[6].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">7</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[6].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[6].value}</span>* STD *<span class="collectSTDValueMSG">${collect7.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[6].value}</span>* EXP *<span class="collectEXPValueMSG">${collect7.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect7.Total}</span>*/*<span class="TotalForMSG">${collect7.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect7.ForTotal}* peças locais, sendo  elas *${collect7.ForSTD}* STD e *${collect7.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect7.ForTotalPriority}* prioridades sendo elas *${collect7.ForEXPPriority}* EXP e *${collect7.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect7.STD}*
        EXP: *${collect7.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect7.SLX}* | PSX: *${collect7.PSX}* | BEC: *${collect7.BEC}* | SOB: *${collect7.SOB}* | BEP: *${collect7.BEP}* | BLM: *${collect7.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `7° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[6].value}*
            VRID: *${VRID[6].value}*
            Qntd: *${sheetQuantity[6].value}*.`
        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect8 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[7].value}* deu exatos *${sheetQuantity[7].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect8.Total}* AWB'
        deixando um total de *${parseInt(collect8.Total - sheetQuantity[7].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">8</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[7].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[7].value}</span>* STD *<span class="collectSTDValueMSG">${collect8.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[7].value}</span>* EXP *<span class="collectEXPValueMSG">${collect8.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect8.Total}</span>*/*<span class="TotalForMSG">${collect8.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect8.ForTotal}* peças locais, sendo  elas *${collect8.ForSTD}* STD e *${collect8.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect8.ForTotalPriority}* prioridades sendo elas *${collect8.ForEXPPriority}* EXP e *${collect8.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect8.STD}*
        EXP: *${collect8.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect8.SLX}* | PSX: *${collect8.PSX}* | BEC: *${collect8.BEC}* | SOB: *${collect8.SOB}* | BEP: *${collect8.BEP}* | BLM: *${collect8.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `8° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[7].value}*
            VRID: *${VRID[7].value}*
            Qntd: *${sheetQuantity[7].value}*.`
        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect9 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[8].value}* deu exatos *${sheetQuantity[8].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect9.Total}* AWB'
        deixando um total de *${parseInt(collect9.Total - sheetQuantity[8].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">9</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[8].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[8].value}</span>* STD *<span class="collectSTDValueMSG">${collect9.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[8].value}</span>* EXP *<span class="collectEXPValueMSG">${collect9.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect9.Total}</span>*/*<span class="TotalForMSG">${collect9.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect9.ForTotal}* peças locais, sendo  elas *${collect9.ForSTD}* STD e *${collect9.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect9.ForTotalPriority}* prioridades sendo elas *${collect9.ForEXPPriority}* EXP e *${collect9.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect9.STD}*
        EXP: *${collect9.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect9.SLX}* | PSX: *${collect9.PSX}* | BEC: *${collect9.BEC}* | SOB: *${collect9.SOB}* | BEP: *${collect9.BEP}* | BLM: *${collect9.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `9° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[8].value}*
            VRID: *${VRID[8].value}*
            Qntd: *${sheetQuantity[8].value}*.`
        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    else if(collect10 != undefined){
        let html2 = ''
        html2= `O VRID: *${VRID[9].value}* deu exatos *${sheetQuantity[9].value}*, porém como sabemos da
        divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect10.Total}* AWB'
        deixando um total de *${parseInt(collect10.Total - sheetQuantity[9].value)}* AWB's fora do informativo do VRID.`
        
        html = `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived.value}</span>* <span style="display: none;">br</span>
        <span class="collectMSG">10</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime[9].value}</span>h* <span style="display: none;">br</span>

        *<span class="collectSTDMSG">${collectSTD[9].value}</span>* STD *<span class="collectSTDValueMSG">${collect10.STD}</span>*
        *<span class="collectEXPMSG">${collectEXP[9].value}</span>* EXP *<span class="collectEXPValueMSG">${collect10.EXP}</span>* <span style="display: none;">br</span>
            
        TOTAL: *<span class="TotalGeralMSG">${collect10.Total}</span>*/*<span class="TotalForMSG">${collect10.ForTotal}</span>* <span style="display: none;">br</span>

        ~*<span class="NameMSG">${name}</span>.*
        `
        html3 = `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
        Peças locais referente as coletas amazon dessa data. *${dateArrived.value}*<span style="display: none;">br</span>

        MH vem recebendo um total de *${collect10.ForTotal}* peças locais, sendo  elas *${collect10.ForSTD}* STD e *${collect10.ForEXP}* EXP
        como mostrados na tabela acima.
        Hoje estamos recebendo um total de *${collect10.ForTotalPriority}* prioridades sendo elas *${collect10.ForEXPPriority}* EXP e *${collect10.ForSTDPriority}* STD,
        a serem entregue no dia seguinte. *${datePriority.value}*<span style="display: none;">br</span>

        STD: *${collect10.STD}*
        EXP: *${collect10.EXP}*<span style="display: none;">br</span>

        *AWB'S EXTRAS*: SLX: *${collect10.SLX}* | PSX: *${collect10.PSX}* | BEC: *${collect10.BEC}* | SOB: *${collect10.SOB}* | BEP: *${collect10.BEP}* | BLM: *${collect10.BLM}*<span style="display: none;">br</span>

        ~*${name}.*`
        html4 = `10° Coleta FOR2-FOR -> TEXBR *${dateArrived.value}*
            Horario: *${arrivalTime[9].value}*
            VRID: *${VRID[9].value}*
            Qntd: *${sheetQuantity[9].value}*.`
        withTheTable.innerHTML = html
        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    } 
}
function setTable(collect, collect1, collect2, collect3, collect4, collect5, collect6, collect7, collect8, collect9, collect10){
    let clt
    let countTotal = 0;
    let countSTD = 0;
    let countEXP = 0;

    let items = document.querySelector('.itensEditTable')
    let total = document.querySelector('.title2 .total')
    let std = document.querySelector('.title2 .std')
    let exp = document.querySelector('.title2 .exp')

    total.innerHTML = ""
    std.innerHTML = ""
    exp.innerHTML = ""
    items.innerHTML = ''

    if(collect != undefined){
        clt = collect
    }else if(collect1 != undefined){
        clt = collect1
    }else if(collect2 != undefined){
        clt = collect2
    }else if(collect3 != undefined){
        clt = collect3
    }else if(collect4 != undefined){
        clt = collect4
    }else if(collect5 != undefined){
        clt = collect5
    }else if(collect6 != undefined){
        clt = collect6
    }else if(collect7 != undefined){
        clt = collect7
    }else if(collect8 != undefined){
        clt = collect8
    }else if(collect9 != undefined){
        clt = collect9
    }else if(collect10 != undefined){
        clt = collect10
    }
    
    let elementos = [];
    for (var chave in clt[0].For) {
        let valor = clt[0].For[chave];
        let valorEXP = clt[0].ForEXP[chave];
        let valorSTD = clt[0].ForSTD[chave];
        elementos.push({ Rota: chave, valor: valor, valorEXP: valorEXP, valorSTD: valorSTD });
        countTotal += valor;
        if(valorSTD != undefined){
            countSTD += valorSTD
        }
        if(valorEXP != undefined){
            countEXP += valorEXP
        }
    }
    elementos.sort(function(a, b) {
        return a.Rota.localeCompare(b.Rota); // Corrija para a.Rota e b.Rota
    });

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        let valor = elemento.valor;
        let valorEXP = elemento.valorEXP;
        let valorSTD = elemento.valorSTD;
        let rota = elemento.Rota;

        let divItem = document.createElement('div');
        divItem.classList.add('item');

        let divChave = document.createElement('div');
        divChave.classList.add('rt');
        let spanChave = document.createElement('span');
        spanChave.textContent = rota;
        divChave.appendChild(spanChave);

        let divRtEXP = document.createElement('div');
        divRtEXP.classList.add('rt', 'rtEXP');
        let spanRtEXP = document.createElement('span');
        spanRtEXP.textContent = valorEXP;
        divRtEXP.appendChild(spanRtEXP);

        let divRtSTD = document.createElement('div');
        divRtSTD.classList.add('rt', 'rtSTD');
        let spanRtSTD = document.createElement('span');
        spanRtSTD.textContent = valorSTD;
        divRtSTD.appendChild(spanRtSTD);

        let divRtTotal = document.createElement('div');
        divRtTotal.classList.add('rt', 'rtTotal');
        let spanRtTotal = document.createElement('span');
        spanRtTotal.textContent = valor;
        divRtTotal.appendChild(spanRtTotal);


        divItem.appendChild(divChave);
        divItem.appendChild(divRtEXP);
        divItem.appendChild(divRtSTD);
        divItem.appendChild(divRtTotal);

        items.appendChild(divItem);
    }
    total.innerHTML = countTotal
    std.innerHTML = countSTD
    exp.innerHTML = countEXP
}
function Graphic(collect, collect1, collect2, collect3, collect4, collect5, collect6, collect7, collect8, collect9, collect10){

    let clt
    google.charts.load('current', {'packages':['corechart']});
        
    if(collect != undefined){
        clt = collect
    }else if(collect1 != undefined){
        clt = collect1
    }else if(collect2 != undefined){
        clt = collect2
    }else if(collect3 != undefined){
        clt = collect3
    }else if(collect4 != undefined){
        clt = collect4
    }else if(collect5 != undefined){
        clt = collect5
    }else if(collect6 != undefined){
        clt = collect6
    }else if(collect7 != undefined){
        clt = collect7
    }else if(collect8 != undefined){
        clt = collect8
    }else if(collect9 != undefined){
        clt = collect9
    }else if(collect10 != undefined){
        clt = collect10
    }

    const existingChart = d3.select('#barChart svg');

      if (!existingChart.empty()) {
        existingChart.remove();
      }

    const data = [
        { category: 'Total', value: clt.Total },
        { category: ' EXP ', value: clt.EXP },
        { category: ' STD ', value: clt.STD },
        { category: ' ', value: null },   
        { category: 'FOR', value: clt.ForTotal },
        { category: 'EXP ', value: clt.ForEXP },
        { category: 'STD ', value: clt.ForSTD },
        { category: '   ', value: null },
        { category: 'CER', value: clt.CerTotal },
        { category: 'EXP', value: clt.CerEXP },
        { category: 'STD', value: clt.CerSTD },
        { category: '  ', value: null },
        { category: 'SAO', value: clt.SAO },
        
      ];
  
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select('#barChart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
    .domain(data.map(d => d.category))
    .range([0, width])
    .padding(0.1);

    const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([height, 0]);

    svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => x(d.category))
    .attr('y', d => y(d.value))
    .attr('width', x.bandwidth())
    .attr('height', d => height - y(d.value))
    .attr('fill', d => {
            if (d.category === 'CER' || d.category === 'EXP' || d.category === 'STD') {
              return '#e0e0e0';
            } else if (d.category === 'FOR' || d.category === 'EXP ' || d.category === 'STD ') {
              return '#00b16a';
            } else if (d.category === 'SAO') {
              return '#d9534f';
            } else {
              return '#084d6e';
            }
          })
    svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x));

    svg.append('g')
    .call(d3.axisLeft(y).ticks(5))
    .selectAll('text')
    .style('font-size', '10px'); 

    svg.selectAll('.bar-label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'bar-label')
      .attr('x', d => x(d.category) + x.bandwidth() / 2)
      .attr('y', d => y(d.value) - 5)
      .attr('text-anchor', 'middle')
      .text(d => d.value)
      .style('font-size', '10px')
      .style('font-weight', '300')
      .attr('stroke', 'white');

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y).ticks(5));
}
function copy(v){
    const msgcopy = document.querySelectorAll('.textcopy')
    const copy = document.querySelectorAll('.copy')
    const msg = msgcopy[v]

    

    const elementoTextCopy = msg.textContent.replace(/^\s+/gm, '').replace(/br/g, '\n');
    
    navigator.clipboard.writeText(elementoTextCopy)
    .then(() => {
        copy[v].style.display = 'flex'
        setTimeout(function() {
            copy[v].style.display = 'none'
        }, 500)
    })
    .catch((err) => {
        // Ocorreu um erro ao copiar o texto
        console.error('Erro ao copiar o texto:', err);
    });
}
function nextInput() {
    document.querySelector('form').addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            const currentElement = document.activeElement;

            // Verifique se o elemento atual é um input
            if (currentElement.tagName.toLowerCase() === 'input') {
                const inputElements = Array.from(document.querySelectorAll('input'));
                const currentIndex = inputElements.indexOf(currentElement);
                const nextIndex = currentIndex + 1;
                if (nextIndex < inputElements.length) {
                    inputElements[nextIndex].focus();
                }
            }
        }
    });
    // Selecione todos os elementos textarea
    const textareas = document.querySelectorAll('textarea');

    // Adicione o evento de tecla para cada textarea
    textareas.forEach(function(textarea) {
        textarea.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const cursorPosition = textarea.selectionStart;
            const textBeforeCursor = textarea.value.substring(0, cursorPosition);
            const textAfterCursor = textarea.value.substring(cursorPosition);
            textarea.value = textBeforeCursor + "\n" + textAfterCursor;
            textarea.selectionStart = textarea.selectionEnd = cursorPosition + 1;
        }
        });
    });

    
}
function imprimirDiv(divId) {
    let conteudoDiv = document.getElementById(divId);
    var janelaImpressao = window.open('', '', 'width=600,height=400');
    janelaImpressao.document.open();
    janelaImpressao.document.write('<style>.button { display: none; }</style>');
    janelaImpressao.document.write(conteudoDiv.innerHTML);
    janelaImpressao.document.write('</body></html>');
    janelaImpressao.document.close();
    janelaImpressao.print();
    janelaImpressao.close();
}
function redirectHelp(){
    const path = window.location.href;
    const lastIndex = path.lastIndexOf("/");

    if (lastIndex !== -1) {
        const newPath = path.substring(0, lastIndex);
        const newURL = newPath + "/components/help.html";

        window.location.href = newURL;
    } else {
        console.error("Não foi possível determinar o caminho correto.");
    }
}