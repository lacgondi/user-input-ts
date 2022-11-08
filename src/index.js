"use strict";
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
    var _a;
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
});
