const validation = () => {
    const name = document.querySelector('input[name="fio"]'),
        tel = document.querySelector('input[name="tel"]'),
        regName = /[^а-яёА-Яё]/,
        regTel = /[^\d\+]/;

    const validating = ( elem, regexp ) => {
        let elemValue = elem.value;
    
        const regular = regexp;
    
        if (regular.test(elemValue)) {
            elem.dataset.flag = false;
            elem.style.borderColor = 'red';
        } else {
            elem.dataset.flag = true;
            elem.style.borderColor = '';
        }
    };

    name.addEventListener('input', e => {
        const target = e.target;
        validating(target, regName);
    });

    tel.addEventListener('input', e => {
        const target = e.target;
        validating(target, regTel);
    });
};

export default validation;