var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function update() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch('../users.json');
        return yield res.json();
    });
}
function printData(users) {
    let userList = document.getElementById("names");
    userList.textContent = "";
    for (let u of users) {
        let li = document.createElement("li");
        li.innerHTML = u.lastName.toUpperCase() + " " + u.firstName;
        userList.appendChild(li);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d;
    (_a = document.getElementById('all')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield update();
        let alphabetical = data.users.sort(function (a, b) {
            let first = a.lastName.toUpperCase();
            let second = b.lastName.toUpperCase();
            if (first < second) {
                return -1;
            }
            else if (first > second) {
                return 1;
            }
            else {
                return 0;
            }
        });
        printData(alphabetical);
    }));
    (_b = document.getElementById('contact')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield update();
        let orderByUser = data.users.sort((a, b) => {
            let first = a.username.toUpperCase();
            let second = b.username.toUpperCase();
            if (first < second) {
                return -1;
            }
            else if (first > second) {
                return 1;
            }
            else {
                return 0;
            }
        });
        let contactTable = document.getElementById('contactTable');
        contactTable.textContent = '';
        for (let u of orderByUser) {
            1601801;
            let tr = document.createElement('tr');
            let username = document.createElement('td');
            let email = document.createElement('td');
            let phone = document.createElement('td');
            username.textContent = u.username;
            email.textContent = u.email;
            phone.textContent = u.phone;
            tr.appendChild(username);
            tr.appendChild(email);
            tr.appendChild(phone);
            contactTable.appendChild(tr);
        }
    }));
    (_c = document.getElementById('weight')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield update();
        let inputHeight = document.getElementById('height');
        let filterHeight = data.users.filter((user) => user.height > parseInt(inputHeight.value));
        let sum = 0;
        for (let fh of filterHeight) {
            sum += fh.weight;
        }
        let output = document.getElementById('sumWeight');
        output.textContent = sum + '';
    }));
    (_d = document.getElementById('brownEyes')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield update();
        let filterBrown = data.users.filter((user) => user.eyeColor === 'Brown').length;
        let output = document.getElementById('resultBrown');
        output.textContent = '' + filterBrown;
    }));
});
export {};
