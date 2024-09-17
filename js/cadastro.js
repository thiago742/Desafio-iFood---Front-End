document.addEventListener('DOMContentLoaded', function() {
    const cpfCnpjInput = document.getElementById('cpfCnpj');

    cpfCnpjInput.addEventListener('input', function() {
        let value = cpfCnpjInput.value.replace(/\D/g, ''); 

        if (value.length > 14) {
            value = value.substring(0, 14);  14 
        }

        if (value.length <= 11) {
            
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
            value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
        } else {
            
            value = value.replace(/^(\d{2})(\d)/, '$1.$2');
            value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
        }

        cpfCnpjInput.value = value;
    });

    const telefoneInput = this.getElementById('telefone')

    telefoneInput.addEventListener('input', function() {
        let value = telefoneInput.value.replace(/\D/g, ''); 

        if (value.length > 11) {
            value = value.substring(0, 11);  11 
        }

        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        telefoneInput.value = value;

    });

    const inscEstd = this.getElementById('ie')

    inscEstd.addEventListener('input', function() {
        let value = inscEstd.value.replace(/\D/g, ''); 

        if (value.length > 9) {
            value = value.substring(0, 9);  9 
        }

        inscEstd.value = value;

    });
});
