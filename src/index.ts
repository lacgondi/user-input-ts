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
})