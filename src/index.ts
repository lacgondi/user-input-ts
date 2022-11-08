import { updateLanguageServiceSourceFile } from "../node_modules/typescript/lib/typescript";

async function update() {
    let res = await fetch('../users.json');
    return await res.json();
}

function printData(users:any){
    let userList = document.getElementById("names")!;
		userList.textContent = "";

		for (let u of users) {
			let li = document.createElement("li");
			li.innerHTML = u.lastName.toUpperCase()+" "+u.firstName;
			userList.appendChild(li);
		}
}


document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('all')?.addEventListener('click',async ()=>{
        let data = await update();
        let alphabetical = data.users.sort(function(a:any,b:any){
            let first=a.lastName.toUpperCase();
            let second = b.lastName.toUpperCase();

            if (first < second) {
                return -1;
            } else if (first > second) {
                return 1;
            } else {
                return 0;
            }
        });
        printData(alphabetical);
    })

    document.getElementById('contact')?.addEventListener('click', async()=>{
        let data = await update();
        let orderByUser=data.users.sort((a:any, b:any)=>{
            let first=a.username.toUpperCase();
            let second = b.username.toUpperCase();

            if (first < second) {
                return -1;
            } else if (first > second) {
                return 1;
            } else {
                return 0;
            }
        });
        
        let contactTable = document.getElementById('contactTable')!;
        contactTable.textContent='';
        for (let u of orderByUser) {1601801
            let tr = document.createElement('tr');
			let username=document.createElement('td');
            let email=document.createElement('td');
            let phone=document.createElement('td');
            username.textContent=u.username;
            email.textContent=u.email;
            phone.textContent=u.phone;
            tr.appendChild(username);
            tr.appendChild(email);
            tr.appendChild(phone);
            contactTable.appendChild(tr);
		}
    })

    document.getElementById('weight')?.addEventListener('click',async()=>{
        let data = await update();
        let inputHeight = document.getElementById('height') as HTMLInputElement;
        let filterHeight = data.users.filter((user:any) => user.height>parseInt(inputHeight.value))
        let sum = 0;
        for(let fh of filterHeight){
            sum+=fh.weight;
        }
        let output = document.getElementById('sumWeight') as HTMLOutputElement;
        output.textContent=sum+'';
    })

    document.getElementById('brownEyes')?.addEventListener('click',async()=>{
        let data = await update();
        let filterBrown = data.users.filter((user:any)=>user.eyeColor==='Brown').length;
        let output = document.getElementById('resultBrown') as HTMLOutputElement;
        output.textContent=''+filterBrown;
    })
})
