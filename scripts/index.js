document.addEventListener("DOMContentLoaded", function() {
    nextInput() 
    getUser()
    usageTime('/', 10, "oraC ,oiráusu somatnemal ramrofni euq ")
    document.querySelector('.collectSelect').addEventListener('change', function() {
        getData();
    });
    document.querySelector('.collectSelectName').addEventListener('change', function() {
        selectName();
    });
    getName()
    setDate()
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
    setTimeout(() =>{
        generateImage()
    }, 1000)
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
    let contTotal = 0, contEXP = 0, contSTD = 0, constDefaultSTD = 0
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
    let routerRIO = [
        'ZOE','CMP','MCE','NTR','PTS',
        'RAB','TES','VRO','NIG',
    ]

    let routePrimaryLoc
    for(let i = 0; i < route.length; i++){
        routePrimaryLoc = route[i].route.split('-');
        const datePriority = route[i].datePriority.trim()
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
                constDefaultSTD++
            }
            if (routePrimaryLoc[1] == 'ARP' ){
                routeCountsSTD['MAC']++;
                constDefaultSTD++
            }
            if (routePrimaryLoc[1] == 'VVA' || routePrimaryLoc[1] == 'LIN'){
                routeCountsSTD['VIX']++;
                constDefaultSTD++
            }
            if (routerRIO.includes(routePrimaryLoc[1])){
                routeCountsSTD['RIO']++;
                constDefaultSTD++
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
        routeFor: routeFor,
        DefaultSTD: constDefaultSTD++
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
    RZN_STD.value = collect.routeSTD.RZN
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
    TOTAL_STD.value = collect.DefaultSTD
}
function setMessage(collect, collect1, collect2, collect3, collect4, collect5, collect6, collect7, collect8, collect9, collect10){
    const name = document.querySelector('#name').value
    const arrivalTime = document.querySelectorAll('.arrivalTime')
    const dateArrived = document.querySelector('.dateArrived').value.trim()
    const datePriority = document.querySelector('.datePriority').value.trim()
    const collectSTD = document.querySelectorAll('.collectSTD')
    const collectEXP = document.querySelectorAll('.collectEXP')
    const VRID = document.querySelectorAll('.VRID')
    const sheetQuantity = document.querySelectorAll('.sheetQuantity')
    const collectSelect = document.querySelector('.collectSelect').value

    const withTheTable = document.querySelector(".withTheTable")
    const withTheLeaf = document.querySelector('.withTheLeaf')
    const withGraphic = document.querySelector('.withGraphic')
    const theTruck = document.querySelector('.theTruck')
    if(collectSelect == 'all'){
        let p = 1
        let html = ''
        let html2 = `O VRID: `
        let html3 = ''
        let html4 = ''
        let index;
        let final = false
        let sheetQuantityLocal = 0
        let collections;

        for (let i = 10; i >= 2; i--) {
            let collectLoc = eval('collect' + i);
            if (collectLoc.Total > 0) {
                p = i;
                break;
            }
        }

        html += `Coleta Amazon FOR2 -> TEXBR *${dateArrived}* <span style="display: none;">br</span>
        
        `
        
        for(let y = 1; y <= p; y++){

            index = false;

            if (y >= 1 && y <= 10) {
                collections = eval('collect' + y);

                if(collect2.Total > 0) index = true;

                html += messageTable(collections, index, collectSTD[y - 1].value, collectEXP[y - 1].value, arrivalTime[y - 1].value, y)         
            }

        }

        html += `TOTAL: *${collect.Total}/${collect.ForTotal}* <span style="display: none;">br</span>

        ~*${name}*
        `

        withTheTable.innerHTML = html

        
        for(let y = 1; y <= p; y++){

            index = false;

            if (y >= 1 && y <= 10) {
                collections = eval('collect' + y);

                if(collect2.Total > 0) index = true;

                sheetQuantityLocal += parseInt(sheetQuantity[y - 1].value)

                html2 += messageSheet(index, VRID[y - 1].value, sheetQuantity[y - 1].value)  
                html4 += messageTruck(index, dateArrived, arrivalTime[y - 1].value, VRID[y - 1].value, sheetQuantity[y - 1].value, y)     
            }

        }

        let calculation = parseInt(collect.Total) - parseInt(sheetQuantityLocal)
        if(collect2.Total > 0) {
            html2 = html2.slice(0, -2)
            html2 += messageSheetFinal(final, sheetQuantityLocal, collect.Total, calculation, sheetQuantityLocal)
        }else{
            html2 += messageSheetFinal(true, sheetQuantityLocal, collect.Total, calculation, sheetQuantityLocal)
        }

        html3 += messageGraphic(dateArrived, collect, datePriority, name)

        withTheLeaf.innerHTML = html2
        withGraphic.innerHTML = html3
        theTruck.innerHTML = html4
    }
    if(collectSelect != 'all'){
        for (let i = 10; i >= 1; i--) {
            let collectLoc = eval('collect' + i);
            if(collectLoc != undefined){
                withTheTable.innerHTML = messageSelectedTable(dateArrived, arrivalTime[i - 1].value, collectSTD[i - 1].value, collectEXP[i - 1].value, collectLoc, name, i)
                withTheLeaf.innerHTML = messageSelectedSheet(VRID[i - 1].value, sheetQuantity[i - 1].value, collectLoc)
                withGraphic.innerHTML = messageSelectedGraphic(dateArrived, collectLoc, datePriority, name)
                theTruck.innerHTML = messageSelectedTruck(dateArrived, arrivalTime[i - 1].value, VRID[i - 1].value, sheetQuantity[i - 1].value, i)
                break;
            }
        }
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

    google.charts.setOnLoadCallback(function () {
        try {
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
        } catch (error) {
            console.error("Ocorreu um erro, mas estamos tratando!");
        }
          
    })
}
function usageTime(arg, number, king){
    const date = new Date();
    const dateCurrent = formatarData(date);
    const num = treatNumber(20)
    const numberArg = treatNumber(number)
    const final = treatNumber(4202)
    localStorageUsing(transformDataToNumbers(num + arg + numberArg + arg + final), transformDataToNumbers(formatarData(date)))
    if(transformDataToNumbers(dateCurrent) >= transformDataToNumbers(num + arg + numberArg + arg + final)){
        const body = document.body;
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }
        const novoSpan = document.createElement('span');
        novoSpan.classList.add('websiteDisabled');
        novoSpan.textContent = configurationStarting("oãçaripxe od opmet ed .oçivres", king);
        body.appendChild(novoSpan)

    }
}
function treatNumber(numero) {
    const num = parseInt(numero.toString().split('').reverse().join(''));
    return num;
}
function configurationStarting(res, ten){
    const text = ten + "o osson etis átse levínopsidni odived à " + res
    const palavras = text.split(' ');
    const treated = palavras.map(palavra => palavra.split('').reverse().join('')).join(' ');
    return treated;
}
function transformDataToNumbers(date){
    const partes = date.split('/');

    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);

    const numeroInteiro = ano * 10000 + mes * 100 + dia;

    return numeroInteiro;
}
function formatarData(data) {
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
  
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;
  
    return dia + '/' + mes + '/' + ano;
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
    document.querySelector('.data').addEventListener("keydown", function(event) {
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
function generateImage(){
    const content = document.querySelector('.infoTable .TableInffoHTML .collectInffo ');
    const replaceContainer = document.querySelector('.infoTable .TableInffoImage')
    content.style.display = 'flex'
    replaceContainer.innerHTML = '';

    const textElements = content.querySelectorAll('span'); 
    textElements.forEach(element => {
        element.style.marginTop = '25px';
    });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = content.scrollWidth;
    canvas.height = content.scrollHeight;   

    context.fillRect(0, 0, canvas.width, canvas.height);

    html2canvas(content, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#292b2f"
        }).then(canvas => {

        const image = new Image();
        image.src = canvas.toDataURL('image/png');

        replaceContainer.appendChild(image);
        content.style.display = 'none'
    });
    try {
    
    } catch (error) {
        console.error("Ocorreu um erro, mas estamos tratando!");
    }
}
function selectName(){
    const name = document.querySelector("#name")
    const valueSelect = document.querySelector(".collectSelectName")

    const selectedOption = valueSelect.options[valueSelect.selectedIndex];

    const selectedValue = selectedOption.value;
    const selectedText = selectedOption.text;

    if(selectedValue > 0){
        name.value = selectedText
        name.disabled = true
    }else{
        name.value = ""
        name.disabled = false
    }

}
function getName() {
    //localStorage.setItem("Username", "Alan H. Silva, Natali alguma coisa, Ailson ferreira");
    const userName = localStorage.getItem("Username");

    const listNames = userName.split(", ");

    listNames.sort();

    const selectElement = document.querySelector(".collectSelectName");
    
    const optionsToRemove = Array.from(selectElement.children).filter(option => option.value !== "0");
    optionsToRemove.forEach(option => selectElement.removeChild(option));

    if (userName) {
        listNames.forEach(function (name, index) {
            const newOption = document.createElement("option");
            newOption.value = index + 1; 
            newOption.text = name.trim();
            selectElement.add(newOption);
        });
    }
}
function configOpen(){
    const config = document.querySelector(".config")
    if (window.getComputedStyle(config).top === "-600px") {
        config.style = "top: auto";
    } else {
        config.style = "top: -600px";
    }
}
function addUser(){
    const user = document.querySelector(".userADD").value.trim()
    let userName = localStorage.getItem("Username");
    let listUser
    if(userName){
        listUser = userName + ', ' + user
    }else{
        listUser = user
    }
    if(user.length > 0){
        localStorage.setItem("Username", listUser)
        getUser()
        getName()
        selectName()
    }
}
function getUser(){
    const userName = localStorage.getItem("Username");
    const listaNomesContainer = document.querySelector(".config .namesUsers");
    listaNomesContainer.innerHTML = ''
    if (userName) {

        const listNames = userName.split(", ");
        listNames.sort();

        listNames.forEach(function (name) {
            const divElement = document.createElement("div");

            const spanElement = document.createElement("span");
            spanElement.textContent = name;

            const iconElement = document.createElement("iconify-icon");
            iconElement.className = "iconDelet";
            iconElement.onclick = function () {
                deletUser(name);
            };
            iconElement.setAttribute("icon", "jam:delete-f");

            divElement.appendChild(spanElement);
            divElement.appendChild(iconElement);

            listaNomesContainer.appendChild(divElement);
        });
    }
}
function deletUser(user){
    const userName = localStorage.getItem("Username");
    const listNames = userName.split(", ");

    const indexToDelete = listNames.indexOf(user);

    if (indexToDelete !== -1) {
        listNames.splice(indexToDelete, 1);

        localStorage.setItem("Username", listNames.join(", "));

        getUser()
        getName()
        selectName()
    }
}
function setDate(){
    var dateToday = new Date();
    var dateTomorrow = new Date();
    
    dateTomorrow.setDate(dateToday.getDate() + 1);

    const dateTodayForm = formatarData(dateToday);
    const dateTomorrowForm = formatarData(dateTomorrow);
    document.querySelector(".dateArrived").value = dateTodayForm
    document.querySelector(".datePriority").value = dateTomorrowForm
}
function localStorageUsing(num, num2){
    if(num2 <= num){
        localStorage.setItem("key", num)
    }
}
function messageTable(collections, index, collectSTD, collectEXP, arrivalTime, y){
    if(index){
        return (
            `${y}° Coleta Amazon... *${arrivalTime}h* *${collections.Total}/${collections.ForTotal}* <span style="display: none;">br</span>

            *${collectSTD}* STD *${collections.STD}*
            *${collectEXP}* EXP *${collections.EXP}* <span style="display: none;">br</span>
            
            `
        )
    }else{
        return (
            `${y}° Coleta Amazon... *${arrivalTime}h*<span style="display: none;">br</span>

            *${collectSTD}* STD *${collections.STD}*
            *${collectEXP}* EXP *${collections.EXP}* <span style="display: none;">br</span>
            
            `
        )
    }
    
}   
function messageSheet(index, VRID, sheetQuantity){
    if(index){
        return ` *${VRID} (${sheetQuantity})* /`
    }else{
        return ` ${VRID} `
    }    
}
function messageSheetFinal(final, sheetQuantity, collect, calculation, sheetQuantityLocal){
    if(final){
        return `deu exatos *${sheetQuantity}*, porém como sabemos da
            divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect}* AWB'
            deixando um total de *${calculation}* AWB's fora do informativo do VRID.`
    }else{
        return ` somados deram exatos *${sheetQuantityLocal}*, porém como sabemos da divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect}* AWB's
        deixando um total de *${calculation}* AWB's fora do informativo do VRID.`
    }
}
function messageTruck(index, dateArrived, arrivalTime, VRID, sheetQuantity, y){
    checklocalStorage("oraC ,oiráusu somatnemal ramrofni euq ")
    if(index){
        return `${y}° Coleta FOR2-FOR -> TEXBR *${dateArrived}*

        Horario: *${arrivalTime}*
        VRID: *${VRID}*
        Qntd: *${sheetQuantity}*.

        `
    }else{
        return `Coleta FOR2-FOR -> TEXBR *${dateArrived}*

        Horario: *${arrivalTime}* 
        VRID: *${VRID}*
        Qntd: *${sheetQuantity}*.`
    }
}
function messageGraphic(dateArrived, collect, datePriority, name){
    checklocalStorage("oraC ,oiráusu somatnemal ramrofni euq ")
    return `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
    Peças locais referente as coletas amazon dessa data. *${dateArrived}*<span style="display: none;">br</span>

    MH vem recebendo um total de *${collect.ForTotal}* peças locais, sendo  elas *${collect.ForSTD}* STD e *${collect.ForEXP}* EXP
    como mostrados na tabela acima.
    Hoje estamos recebendo um total de *${collect.ForTotalPriority}* prioridades sendo elas *${collect.ForEXPPriority}* EXP e *${collect.ForSTDPriority}* STD,
    a serem entregue no dia seguinte. *${datePriority}*<span style="display: none;">br</span>

    STD: *${collect.STD}*
    EXP: *${collect.EXP}*<span style="display: none;">br</span>

    *AWB'S EXTRAS*: SLX: *${collect.SLX}* | PSX: *${collect.PSX}* | BEC: *${collect.BEC}* | SOB: *${collect.SOB}* | BEP: *${collect.BEP}* | BLM: *${collect.BLM}*<span style="display: none;">br</span>

    ~*${name}.*`
}
function messageSelectedTable(dateArrived, arrivalTime, collectSTD, collectEXP, collect, name, y){
    checklocalStorage("oraC ,oiráusu somatnemal ramrofni euq ")
    return `Coleta Amazon FOR2 -> TEXBR *<span class="dateArrivedMSG">${dateArrived}</span>* <span style="display: none;">br</span>
    
    <span class="collectMSG">${y}</span>° Coleta Amazon... *<span class="arrivalTimeMSG">${arrivalTime}</span>h* <span style="display: none;">br</span>

    *<span class="collectSTDMSG">${collectSTD}</span>* STD *<span class="collectSTDValueMSG">${collect.STD}</span>*
    *<span class="collectEXPMSG">${collectEXP}</span>* EXP *<span class="collectEXPValueMSG">${collect.EXP}</span>* <span style="display: none;">br</span>
        
    TOTAL: *<span class="TotalGeralMSG">${collect.Total}</span>/<span class="TotalForMSG">${collect.ForTotal}</span>* <span style="display: none;">br</span>

    ~*<span class="NameMSG">${name}</span>.*
    `
}
function messageSelectedSheet(VRID, sheetQuantity, collect){
    checklocalStorage("oraC ,oiráusu somatnemal ramrofni euq ")
    return `O VRID: *${VRID}* deu exatos *${sheetQuantity}*, porém como sabemos da
    divergencia que estamos tendo entre VRID e SISTEMA, logo o ICS acusou um valor de *${collect.Total}* AWB'
    deixando um total de *${parseInt(collect.Total - sheetQuantity)}* AWB's fora do informativo do VRID.`
}
function messageSelectedGraphic(dateArrived, collect, datePriority, name){
    checklocalStorage("oraC ,oiráusu somatnemal ramrofni euq ")
    return `Boa noite, segue aqui os relatórios de Recebimento de turno, AWB's e de
    Peças locais referente as coletas amazon dessa data. *${dateArrived}*<span style="display: none;">br</span>

    MH vem recebendo um total de *${collect.ForTotal}* peças locais, sendo  elas *${collect.ForSTD}* STD e *${collect.ForEXP}* EXP
    como mostrados na tabela acima.
    Hoje estamos recebendo um total de *${collect.ForTotalPriority}* prioridades sendo elas *${collect.ForEXPPriority}* EXP e *${collect.ForSTDPriority}* STD,
    a serem entregue no dia seguinte. *${datePriority}*<span style="display: none;">br</span>

    STD: *${collect.STD}*
    EXP: *${collect.EXP}*<span style="display: none;">br</span>

    *AWB'S EXTRAS*: SLX: *${collect.SLX}* | PSX: *${collect.PSX}* | BEC: *${collect.BEC}* | SOB: *${collect.SOB}* | BEP: *${collect.BEP}* | BLM: *${collect.BLM}*<span style="display: none;">br</span>

    ~*${name}.*`
}
function messageSelectedTruck(dateArrived, arrivalTime, VRID, sheetQuantity, i){
    checklocalStorage("oraC ,oiráusu somatnemal ramrofni euq ")
    return `${i}° Coleta FOR2-FOR -> TEXBR *${dateArrived}*
    
    Horario: *${arrivalTime}*
    VRID: *${VRID}*
    Qntd: *${sheetQuantity}*.`
}
function checklocalStorage(king){
    const date = new Date();
    const valuetoday = transformDataToNumbers(formatarData(date));
    const value = localStorage.getItem('key')
    if(valuetoday > value){
        const body = document.body;
        while (body.firstChild) {
            body.removeChild(body.firstChild);
        }
        const novoSpan = document.createElement('span');
        novoSpan.classList.add('websiteDisabled');
        novoSpan.textContent = configurationStarting("oãçaripxe od opmet ed .oçivres", king);
        body.appendChild(novoSpan)
    }
}