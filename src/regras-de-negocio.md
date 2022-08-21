- cada viagem tem uma quantidade x de assentos.
- cada assento tem um codigo unico.
- cada passageiro vai ter um assento, e somente um.
- quando um passageiro reservar um assento, o mesmo deverá estar indisponível e decrementar da quantidade livre.
- quando um passageiro cancelar a viagem, o assento deverá ficar disponível novamente.

- [USER] Como usuário admin quero poder criar outros usuários
  - Um usuário administrador pode adicionar outros usuários administradores e usuários de companhias;
  - Um usuário de companhia só pode adicionar usuários da mesma companhia
 <!-- __Tabela de usuários__    -->
  <!-- |key   |name   |data type   |
  |:----:|:-----:|:----------:|
  |FK    |id     |int         |   -->

- [LOGIN]
  - Todo usuário do tipo admin ou companhia precisa estar autenticado e autorizado para fazer operações no sistema;
  - Para fazer login, o usuário precisa de um _username_ e _password_;
  - Caso o usuário esqueça a senha, ele poderá refazer através de um email de recuperação;

- [TRAVEL] Como usuario quero poder criar uma viagem:
  - O usuario deve selecionar ou criar o tipo de onibus (nome e preço da passagem),
    quantidade de assentos total, local de partida e de destino, data de partida e nome da companhia rodoviaria.
  - Ao criar uma passagem, deve-se adicionar os numeros sequenciais dos assentos do 1 até o numero máximo total de assentos disponíveis em um array chamado _avaliable-seats_.
    ex: Numero máximo de assentos: 10
    ``` ts
    let avaliable-seats;
    avaliable-seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    ```
- [PASSENGER] Como usuário passageiro quero poder reservar uma viagem
