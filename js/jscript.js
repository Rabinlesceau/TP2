let listcours= document.querySelector('.lescours');
let listmbres=document.querySelector('.membr');
if (listcours) {
    fetch('js/cours.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let lescours=data;

        for (const cours of lescours) {
            listcours.innerHTML +=`
                <div class="imgmbr">
                    <div class="imgcours">
                        <img src=${cours.image} alt="">
                    </div>
                    <span>${cours.nom}</span>
                    <p>${cours.volume}</p>
                </div>            
            `            
        }    
    });
}else if (listmbres) {
    fetch('js/membres.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let lesmbres=data;

        for (const mbr of lesmbres) {
            listmbres.innerHTML +=`
                <div class="membr">
                <div class="imgmbr">
                    <img src=${mbr.image} alt="">
                    <span>${mbr.nom}</span>
                </div>        
            `            
        }    
    });
}