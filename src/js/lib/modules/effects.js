import $ from "../core";

$.prototype.animateOverTime = function(dur, cb, fin) {
    let timeStart;

    function _animateOverTime (time) {
        if(!timeStart) {
            timeStart = time;
        }
        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / dur, 1);
        cb(complection);
        if(timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        }else {
            if(typeof fin === 'function') {
                fin();
            }
        }
    }
    return _animateOverTime;
};

$.prototype.fadeInTech = function(dur, display, fin) {
    const _fadeInTech = () => {
        for(let i = 0; i < this.length; i++) {
            
            this[i].style.display = display || 'block'; // старый способ, в новом задаем в параметрах по умолчанию при объявлении функции
            
            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };
            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani);
        }
    };
    return _fadeInTech;
};

$.prototype.fadeOutTech = function(dur, display, fin) {
    
    const _fadeOutTech = () =>  {
        for(let i = 0; i < this.length; i++) {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection;
                if(complection === 1) {
                    this[i].style.display = 'none';
                }
            };
            
            const ani = this.animateOverTime(dur, _fadeOut, fin);
            requestAnimationFrame(ani);
            
        }
    };
    return _fadeOutTech;
};

$.prototype.fadeIn = function(dur, display, fin) {
    const ani = this.fadeInTech(dur, display, fin);
    requestAnimationFrame(ani);
    return this;
};

$.prototype.fadeOut = function(dur, display, fin) {
    const ani = this.fadeOutTech(dur, display, fin);
    requestAnimationFrame(ani);
    return this;
};

$.prototype.fadeToggle = function(dur, display, fin) {
    for(let i = 0; i < this.length; i++) {
        if(window.getComputedStyle(this[i]).display === 'none') {
            const ani = this.fadeInTech(dur, display, fin);
            requestAnimationFrame(ani);
        }else {
            const ani = this.fadeOutTech(dur, display, fin);
            requestAnimationFrame(ani);
        }
    }
    return this;
};

$.prototype.moveRight = function(dur, display, fin) {
    for(let i = 0; i < this.length; i++) {
        const _moveRight = (complection) => {
            this[i].style.transform = `translateX(${complection*200}px)`;//200 = moving right to 200px 
            
        };
        const ani = this.animateOverTime(dur, _moveRight, fin);
        requestAnimationFrame(ani);
    }
    return this;
};

// $.prototype.fadeIn = function(dur, display, fin) {
//     for(let i = 0; i < this.length; i++) {
//         this[i].style.display = display || 'block'; // старый способ, в новом задаем в параметрах по умолчанию при объявлении функции

//         const _fadeIn = (complection) => {
//             this[i].style.opacity = complection;
//         };
//         const ani = this.animateOverTime(dur, this._fadeIn, fin);
//         requestAnimationFrame(ani);
//     }
//     return this;
// };

// $.prototype.fadeOut = function(dur, display, fin) {
//     for(let i = 0; i < this.length; i++) {
//         const _fadeOut = (complection) => {
//             this[i].style.opacity = 1 - complection;
//             if(complection === 1) {
//                 this[i].style.display = 'none';
//             }
//         };
//         const ani = this.animateOverTime(dur, _fadeOut, fin);
//         requestAnimationFrame(ani);
//     }
//     return this;
// };


