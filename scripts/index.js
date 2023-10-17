document.addEventListener("DOMContentLoaded", function() {
    nextInput()
    document.querySelector('select').addEventListener('change', function() {
        getData();
    });
    const data = new Date();
    document.querySelector(".dateToday").value = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;


});

function getData(){
    const data1 = document.querySelector("#data1").value.split('\n')
    const data2 = document.querySelector("#data2").value.split('\n')
    const data3 = document.querySelector("#data3").value.split('\n')
    const data4 = document.querySelector("#data4").value.split('\n')
    const data5 = document.querySelector("#data5").value.split('\n')
    
    const dadosFormatados = [];
    const dadosFormatadoscoleta1 = [];
    const dadosFormatadoscoleta2 = [];
    const dadosFormatadoscoleta3 = [];
    const dadosFormatadoscoleta4 = [];
    const dadosFormatadoscoleta5 = [];

    const datePriority = document.querySelector('.datePriority')
        
    for(let i = 0; i < data1.length; i++){
        const item = data1[i].split('	');
        const route = item[0];
        const type = item[1];
        const date = item[2];

        dadosFormatados.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value,
            collect: 0
        });
        dadosFormatadoscoleta1.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value,
            collect: 1
        });
    }
    for(let i = 0; i < data2.length; i++){
        const item = data2[i].split('	');

        const route = item[0];
        const type = item[1];
        const date = item[2];

        dadosFormatados.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value
        });
        dadosFormatadoscoleta2.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value,
            collect: 2
        });
    }
    for(let i = 0; i < data3.length; i++){
        const item = data3[i].split('	');

        const route = item[0];
        const type = item[1];
        const date = item[2];

        dadosFormatados.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value
        });
        dadosFormatadoscoleta3.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value,
            collect: 3
        });
    }
    for(let i = 0; i < data4.length; i++){
        const item = data4[i].split('	');

        const route = item[0];
        const type = item[1];
        const date = item[2];

        dadosFormatados.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value
        });
        dadosFormatadoscoleta4.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value,
            collect: 4
        });
    }
    for(let i = 0; i < data5.length; i++){
        const item = data5[i].split('	');

        const route = item[0];
        const type = item[1];
        const date = item[2];

        dadosFormatados.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value
        });
        dadosFormatadoscoleta5.push({
            route: route,
            type: type,
            date: date,
            priority: item[1],
            datePriority: datePriority.value,
            collect: 5
        });
    }
    const count = getCount(dadosFormatados)
    const count1 = getCount(dadosFormatadoscoleta1)
    const count2 = getCount(dadosFormatadoscoleta2)
    const count3 = getCount(dadosFormatadoscoleta3)
    const count4 = getCount(dadosFormatadoscoleta4)
    const count5 = getCount(dadosFormatadoscoleta5)
    getCollect(count,count1,count2,count3,count4,count5)
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
    let routesEXP = [
        "AJU","CER","FEK","ITN","JPA",
        "JPS","NTA","PRN","REK","RRU",
        "SSA","MAC"
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
        collect: collect,
        routeFor: routeFor
    }
}
function getCollect(cl, cl1, cl2, cl3, cl4, cl5){
    const collect = document.querySelector('.collectSelect').value
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

    
    switch (collect) {
        case "all":
            contSTD.value = cl.STD
            contEXP.value = cl.EXP
            contTotal.value = cl.Total

            contForSTD.value = cl.ForSTD
            contForEXP.value = cl.ForEXP
            contFor.value = cl.ForTotal

            contForSTDPriority.value = cl.ForSTDPriority
            contForEXPPriority.value = cl.ForEXPPriority
            contForPriority.value = cl.ForTotalPriority

            contCerSTD.value = cl.CerSTD
            contCerEXP.value = cl.CerEXP
            contCerTotal.value = cl.CerTotal

            SAO.value = cl.SAO
            SLX.value = cl.SLX
            PSX.value = cl.PSX
            BEC.value = cl.BEC
            SOB.value = cl.SOB
            BEP.value = cl.BEP
            BLM.value = cl.BLM

            AJU.value = cl.routeEXP.AJU
            FEK.value = cl.routeEXP.FEK
            JPA.value = cl.routeEXP.JPA
            NTA.value = cl.routeEXP.NTA
            REK.value = cl.routeEXP.REK
            SSA.value = cl.routeEXP.SSA
            CER.value = cl.routeEXP.CER
            ITN.value = cl.routeEXP.ITN
            JPS.value = cl.routeEXP.JPS
            PRN.value = cl.routeEXP.PRN
            RRU.value = cl.routeEXP.RRU
            MAC.value = cl.routeEXP.MAC
            FOR.value = cl.ForEXP
            TOTAL.value = cl.EXP
            setMessage(cl, cl1, cl2, cl3, cl4, cl5)
            Graphic(cl)
            setTable(cl.routeFor)
            break;
        case "collect1":
            contSTD.value = cl1.STD
            contEXP.value = cl1.EXP
            contTotal.value = cl1.Total

            contForSTD.value = cl1.ForSTD
            contForEXP.value = cl1.ForEXP
            contFor.value = cl1.ForTotal

            contForSTDPriority.value = cl1.ForSTDPriority
            contForEXPPriority.value = cl1.ForEXPPriority
            contForPriority.value = cl1.ForTotalPriority

            contCerSTD.value = cl1.CerSTD
            contCerEXP.value = cl1.CerEXP
            contCerTotal.value = cl1.CerTotal

            SAO.value = cl1.SAO
            SLX.value = cl1.SLX
            PSX.value = cl1.PSX
            BEC.value = cl1.BEC
            SOB.value = cl1.SOB
            BEP.value = cl1.BEP
            BLM.value = cl1.BLM

            AJU.value = cl1.routeEXP.AJU
            FEK.value = cl1.routeEXP.FEK
            JPA.value = cl1.routeEXP.JPA
            NTA.value = cl1.routeEXP.NTA
            REK.value = cl1.routeEXP.REK
            SSA.value = cl1.routeEXP.SSA
            CER.value = cl1.routeEXP.CER
            ITN.value = cl1.routeEXP.ITN
            JPS.value = cl1.routeEXP.JPS
            PRN.value = cl1.routeEXP.PRN
            RRU.value = cl1.routeEXP.RRU
            MAC.value = cl1.routeEXP.MAC
            FOR.value = cl1.ForEXP
            TOTAL.value = cl1.EXP
            setMessage(null, cl1)
            Graphic(null, cl1)
            setTable(null, cl1.routeFor)
            break;
        case "collect2":
            contSTD.value = cl2.STD
            contEXP.value = cl2.EXP
            contTotal.value = cl2.Total

            contForSTD.value = cl2.ForSTD
            contForEXP.value = cl2.ForEXP
            contFor.value = cl2.ForTotal

            contForSTDPriority.value = cl2.ForSTDPriority
            contForEXPPriority.value = cl2.ForEXPPriority
            contForPriority.value = cl2.ForTotalPriority

            contCerSTD.value = cl2.CerSTD
            contCerEXP.value = cl2.CerEXP
            contCerTotal.value = cl2.CerTotal

            SAO.value = cl2.SAO
            SLX.value = cl2.SLX
            PSX.value = cl2.PSX
            BEC.value = cl2.BEC
            SOB.value = cl2.SOB
            BEP.value = cl2.BEP
            BLM.value = cl2.BLM

            AJU.value = cl2.routeEXP.AJU
            FEK.value = cl2.routeEXP.FEK
            JPA.value = cl2.routeEXP.JPA
            NTA.value = cl2.routeEXP.NTA
            REK.value = cl2.routeEXP.REK
            SSA.value = cl2.routeEXP.SSA
            CER.value = cl2.routeEXP.CER
            ITN.value = cl2.routeEXP.ITN
            JPS.value = cl2.routeEXP.JPS
            PRN.value = cl2.routeEXP.PRN
            RRU.value = cl2.routeEXP.RRU
            MAC.value = cl2.routeEXP.MAC
            FOR.value = cl2.ForEXP
            TOTAL.value = cl2.EXP
            setMessage(null, null, cl2)
            Graphic(null, null, cl2)
            setTable(null, null, cl2.routeFor)
            break;
        case "collect3":
            contSTD.value = cl3.STD
            contEXP.value = cl3.EXP
            contTotal.value = cl3.Total

            contForSTD.value = cl3.ForSTD
            contForEXP.value = cl3.ForEXP
            contFor.value = cl3.ForTotal

            contForSTDPriority.value = cl3.ForSTDPriority
            contForEXPPriority.value = cl3.ForEXPPriority
            contForPriority.value = cl3.ForTotalPriority

            contCerSTD.value = cl3.CerSTD
            contCerEXP.value = cl3.CerEXP
            contCerTotal.value = cl3.CerTotal

            SAO.value = cl3.SAO
            SLX.value = cl3.SLX
            PSX.value = cl3.PSX
            BEC.value = cl3.BEC
            SOB.value = cl3.SOB
            BEP.value = cl3.BEP
            BLM.value = cl3.BLM

            AJU.value = cl3.routeEXP.AJU
            FEK.value = cl3.routeEXP.FEK
            JPA.value = cl3.routeEXP.JPA
            NTA.value = cl3.routeEXP.NTA
            REK.value = cl3.routeEXP.REK
            SSA.value = cl3.routeEXP.SSA
            CER.value = cl3.routeEXP.CER
            ITN.value = cl3.routeEXP.ITN
            JPS.value = cl3.routeEXP.JPS
            PRN.value = cl3.routeEXP.PRN
            RRU.value = cl3.routeEXP.RRU
            MAC.value = cl3.routeEXP.MAC
            FOR.value = cl3.ForEXP
            TOTAL.value = cl3.EXP
            setMessage(null, null, null, cl3)
            Graphic(null, null, null, cl3)
            setTable(null, null, null, cl3.routeFor)
            break;
        case "collect4":
            contSTD.value = cl4.STD
            contEXP.value = cl4.EXP
            contTotal.value = cl4.Total

            contForSTD.value = cl4.ForSTD
            contForEXP.value = cl4.ForEXP
            contFor.value = cl4.ForTotal

            contForSTDPriority.value = cl4.ForSTDPriority
            contForEXPPriority.value = cl4.ForEXPPriority
            contForPriority.value = cl4.ForTotalPriority

            contCerSTD.value = cl4.CerSTD
            contCerEXP.value = cl4.CerEXP
            contCerTotal.value = cl4.CerTotal

            SAO.value = cl4.SAO
            SLX.value = cl4.SLX
            PSX.value = cl4.PSX
            BEC.value = cl4.BEC
            SOB.value = cl4.SOB
            BEP.value = cl4.BEP
            BLM.value = cl4.BLM

            AJU.value = cl4.routeEXP.AJU
            FEK.value = cl4.routeEXP.FEK
            JPA.value = cl4.routeEXP.JPA
            NTA.value = cl4.routeEXP.NTA
            REK.value = cl4.routeEXP.REK
            SSA.value = cl4.routeEXP.SSA
            CER.value = cl4.routeEXP.CER
            ITN.value = cl4.routeEXP.ITN
            JPS.value = cl4.routeEXP.JPS
            PRN.value = cl4.routeEXP.PRN
            RRU.value = cl4.routeEXP.RRU
            MAC.value = cl4.routeEXP.MAC
            FOR.value = cl4.ForEXP
            TOTAL.value = cl4.EXP
            setMessage(null, null, null, null, cl4)
            Graphic(null, null, null, null, cl4)
            setTable(null, null, null, null, cl4.routeFor)
        break;
        case "collect5":
            contSTD.value = cl5.STD
            contEXP.value = cl5.EXP
            contTotal.value = cl5.Total

            contForSTD.value = cl5.ForSTD
            contForEXP.value = cl5.ForEXP
            contFor.value = cl5.ForTotal

            contForSTDPriority.value = cl5.ForSTDPriority
            contForEXPPriority.value = cl5.ForEXPPriority
            contForPriority.value = cl5.ForTotalPriority

            contCerSTD.value = cl5.CerSTD
            contCerEXP.value = cl5.CerEXP
            contCerTotal.value = cl5.CerTotal

            SAO.value = cl5.SAO
            SLX.value = cl5.SLX
            PSX.value = cl5.PSX
            BEC.value = cl5.BEC
            SOB.value = cl5.SOB
            BEP.value = cl5.BEP
            BLM.value = cl5.BLM

            AJU.value = cl5.routeEXP.AJU
            FEK.value = cl5.routeEXP.FEK
            JPA.value = cl5.routeEXP.JPA
            NTA.value = cl5.routeEXP.NTA
            REK.value = cl5.routeEXP.REK
            SSA.value = cl5.routeEXP.SSA
            CER.value = cl5.routeEXP.CER
            ITN.value = cl5.routeEXP.ITN
            JPS.value = cl5.routeEXP.JPS
            PRN.value = cl5.routeEXP.PRN
            RRU.value = cl5.routeEXP.RRU
            MAC.value = cl5.routeEXP.MAC
            FOR.value = cl5.ForEXP
            TOTAL.value = cl5.EXP
            setMessage(null, null, null, null, null,cl5)
            Graphic(null, null, null, null, null,cl5)
            setTable(null, null, null, null, null,cl5.routeFor)
        break;
        default:
            console.log("Opção desconhecida");   
    }
    
}
function setMessage(collect, collect1, collect2, collect3, collect4, collect5){
    const dadosInfo = []
    const name = document.querySelector('#name').value
    const arrivalTime = document.querySelectorAll('.arrivalTime')
    const dateArrived = document.querySelector('.dateArrived')
    const datePriority = document.querySelector('.datePriority')
    const collectSTD = document.querySelectorAll('.collectSTD')
    const collectEXP = document.querySelectorAll('.collectEXP')
    const VRID = document.querySelectorAll('.VRID')
    const sheetQuantity = document.querySelectorAll('.sheetQuantity')

    const collectMSG = document.querySelectorAll('.collectMSG')
    const arrivalTimeMSG = document.querySelectorAll('.arrivalTimeMSG')
    const collectSTDMSG = document.querySelectorAll('.collectSTDMSG')
    const collectSTDValueMSG = document.querySelectorAll('.collectSTDValueMSG')
    const collectEXPMSG = document.querySelectorAll('.collectEXPMSG')
    const collectEXPValueMSG = document.querySelectorAll('.collectEXPValueMSG')
    const TotalGeralMSG = document.querySelectorAll('.TotalGeralMSG')
    const TotalForMSG = document.querySelectorAll('.TotalForMSG')
    const NameMSG = document.querySelector('.NameMSG')

    const withTheTable = document.querySelector(".withTheTable")
    const withTheLeaf = document.querySelector('.withTheLeaf')
    const withGraphic = document.querySelector('.withGraphic')
    const theTruck = document.querySelector('.theTruck')

    for(let i = 0; i < arrivalTime.length; i++){
        dadosInfo.push({
            name: name,
            arrivalTime: arrivalTime[i].value, 
            dateArrived: dateArrived,
            collectSTD: collectSTD[i].value, 
            collectEXP: collectEXP[i].value, 
            VRID: VRID[i].value, 
            sheetQuantity: sheetQuantity[i].value,
        })
    }
    if(collect != undefined && collect1 != undefined && collect2 != undefined && collect3 != undefined && collect4 != undefined && collect5 != undefined ){
        let p = 1
        let html = ''

        let collectSTDLocal
        if(collect5.Total > 0){
            p = 5
        }else if(collect4.Total > 0){
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
            html += 
                `${y}° Coleta Amazon... *${arrivalTime[y - 1].value}h* *${collectSTDLocal.Total}*/*${collectSTDLocal.ForTotal}* <span style="display: none;">br</span>

                *${collectSTD[y - 1].value}* STD *${collectSTDLocal.STD}*
                *${collectEXP[y - 1].value}* EXP *${collectSTDLocal.EXP}* <span style="display: none;">br</span>
                
                `
            
        }

        html += `TOTAL: *${collect.Total}*/*${collect.ForTotal}* <span style="display: none;">br</span>

        ~*${name}*
        `
        withTheTable.innerHTML = html
    }
    if(collect != undefined && collect1 != undefined && collect2 != undefined && collect3 != undefined && collect4 != undefined && collect5 != undefined ){
        let y = 0
        let html2 = ''
        let html3 = ''
        let html4 = ''
        let sheetQuantityLocal = 0

        if(collect5.Total > 0){
            p = 5
        }else if(collect4.Total > 0){
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
}
function setTable(collect, collect1, collect2, collect3, collect4, collect5){
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
function Graphic(collect, collect1, collect2, collect3, collect4, collect5){

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
    }
    google.charts.setOnLoadCallback(() => {
        let data = google.visualization.arrayToDataTable([
            ['Rotas', 'Quantidade', { role: 'annotation' }, { role: 'style' }],
            ['CER', clt.CerTotal, clt.CerTotal, 'color: red'],
            ['CER EXP', clt.CerEXP, clt.CerEXP, 'color: red'], 
            ['CER STD', clt.CerSTD, clt.CerSTD, 'color: red'], 
            ['FOR', clt.ForTotal, clt.ForTotal, 'color: green'],
            ['FOR EXP', clt.ForEXP, clt.ForEXP, 'color: green'],
            ['FOR STD', clt.ForSTD, clt.ForSTD, 'color: green'], 
            ['SAO', clt.SAO, clt.SAO, 'color: purple'], 
            ['Total', clt.Total, clt.Total, 'color: blue'],
            ['Total EXP', clt.EXP, clt.EXP, 'color: blue'],
            ['Total STD', clt.STD, clt.STD, 'color: blue'], 
        ]);
    
        let options = {
            title: '',
            width: 600,
            height: 400,
            legend: { position: 'none' },
            hAxis: { title: '' },
            vAxis: { title: '', minValue: 0 }
        };
    
        let chart = new google.visualization.ColumnChart(document.getElementById('barChart'));
        chart.draw(data, options);
    });
    


    
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