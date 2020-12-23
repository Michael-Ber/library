import $ from "../core";

$.prototype.html = function(content) { // меняем html-контент элемента
    for (let i = 0; i < this.length; i++) {
        if(content) {
            this[i].innerHTML = content;
        }else {
            return this[i].innerHTML; // уже не объект, а просто контент элемента
        }
    }
    return this;
    
};

$.prototype.eq = function(i) {
    let swap = this[i];
    let objLength = Object.keys(this).length;


    for(let i = 0; i < objLength; i++) {
        delete this[i];
    }
    
    this[0] = swap;
    this.length = 1;

    return this;
};

$.prototype.index = function() {
    let parent = this[0].parentNode;
    let childs = [...parent.children];
    
    const findMyIndex = (item) => {
        return item == this[0];
    };
    return childs.findIndex(findMyIndex); // возвращает индекс если колбэк функция проходясь по-каждому элементу массива вернет true

};

// $.prototype.index = function () { из вопроса евгения на лекцию 40, уже переделана
//     let elem = this[0];
//     let parent = elem.parentNode;
//     let children = parent.children;
//     [...children].forEach((item, n) => {
//         checkIndex(item, n);
//     });
//     function checkIndex(item, index) {
        
//         if(item === elem) {
//             return index;
//         }
//         return false;
//     }
//     return [...children].findIndex(checkIndex);
// };

$.prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;
    const copyObj = Object.assign({}, this); // чтобы не было багов
    
    for(let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if(arr.length == 0) {
            continue;
        }

        for(let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for(; numberOfItems < objLength; numberOfItems++) { // удаляем хвосты, оставшиеся от неподошедших нод
        delete this[numberOfItems];
    }
    return this;

};

$.prototype.closest = function(selector) {
    let counter = 0;
    let amount = Object.keys(this).length;
    for(let i = 0; i < amount-1; i++) {
        this[i] = this[i].closest(selector);
        if(this[i] == null || this[i] == undefined) {
            delete this[i];
            this.length = this.length - 1;
        }
        counter++;
    }

    const objLength = Object.keys(this).length;
    for(; counter < objLength; counter++) { // удаляем хвосты, оставшиеся от неподошедших нод
        delete this[counter];
    }
    return this;
};

// $.prototype.siblings = function() {
//     let numberOfItems = 0;
//     let counter = 0;
//     let parent = this[0].parentNode;
//     let children = parent.children;
//     const copyObj = Object.assign({}, this); // чтобы не было багов
//     for(let i = 0; i < children.length; i++) {
//         if(children[i] !== copyObj[0]) {
//             this[i] = children[i];
//             counter++;
//         }
//     }
//     this.length = counter;
//     return this;

// };

$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;
    const copyObj = Object.assign({}, this); // чтобы не было багов
    
    for(let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;
    
        for(let j = 0; j < arr.length; j++) {
            if(copyObj[i] === arr[j]) {
                continue;
            }
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }
    this.length = numberOfItems - 1;

    const objLength = Object.keys(this).length;
    for(; numberOfItems < objLength; numberOfItems++) { // удаляем хвосты, оставшиеся от неподошедших нод
        delete this[numberOfItems];
    }
    return this;

};