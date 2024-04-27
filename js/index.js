'use strict'

document.querySelectorAll('.password-toggler').forEach(el => {
    el.addEventListener('click', () => {
        const input = el.parentElement.querySelector('input')
        if (input.type === 'password') {
            input.type = 'text'
        } else {
            input.type = 'password'
        }
    })
})

document.querySelectorAll('.payment-method').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.payment-method').forEach(per => {
            per.checked = false;
            per.parentElement?.classList.remove('shadow-lg');
        })
        
        el.checked = true;
        el.parentElement?.classList.add('shadow-lg');
    })
})