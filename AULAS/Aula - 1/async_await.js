const usuario = { 
    nome: 'Anna',
    sobrenome: 'Lima Souza', 
    nascimento: '1998/09/20',
    sexo: 'F',
    endereco: {
      rua: 'Rua A',
      bairro: 'estudos'
    },
  }
  
  const { nome, endereco: {rua}, endereco  } = usuario;
  
  // console.log(endereco);
  
  const usuarios = [
    { 
      nome: 'Anna',
      sobrenome: 'Lima Souza', 
      nascimento: '1998/09/20',
      sexo: 'F',
      endereco: {
        rua: 'Rua A',
        bairro: 'estudos'
      },
    },
    { 
      nome: 'Diogo',
      sobrenome: 'Lima Souza', 
      nascimento: '1989/05/12',
      sexo: 'M',
      endereco: {
        rua: 'Rua B',
        bairro: 'estudos'
      },
    },
    { 
      nome: 'Laura',
      sobrenome: 'Lima Souza', 
      nascimento: '1994/11/25',
      sexo: 'F',
      endereco: {
        rua: 'Rua C',
        bairro: 'estudos'
      },
    },
    { 
      nome: 'Diego',
      sobrenome: 'Lima Souza', 
      nascimento: '1989/05/12',
      sexo: 'M',
      endereco: {
        rua: 'Rua B',
        bairro: 'estudos'
      },
    },
  ];
  
  
  
  function ApiUsuarios(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(usuario) , 2000)
    })
  }
  
  
   (async function myAsyncFunction(){
    const result = await ApiUsuarios();
    console.log(result);
    const result2 = await ApiUsuarios();
    console.log(result2);
  
    console.log('Hello');
  
  })();
  