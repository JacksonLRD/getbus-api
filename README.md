## Sistema da rodoviária de Fortaleza

### Implementa um sistema de compra de passagens da rodoviária de Fortaleza:

#### [Diagrama Entidade Relacionamento](https://drive.google.com/file/d/1jAihtJ7SI0rTlBy86iFAFYQX7_vJ8cAw/view?usp=sharing)

- Existem os perfis de administrador do sistema, funcionário da companhia de viação e passageiros.
- Todos os usuários precisam estar cadastrados e autenticados para utilizar o sistema.

#### Usuários administradores:

- podem cadastrar companhias
- podem cadastrar outros administradores e funcionários de diversas companhias.

#### Usuários das companhias:

- podem cadastrar apenas usuários para sua própria companhia.
- podem cadastrar viagens. Elas devem conter:<br />1. ponto de origem e destino.<br />2. data e hora de saída da viagem.<br />3. quantidade de assentos que a viagem habilita.<br />
- podem consultar as viagens disponíveis para esta semana. Ele poderá filtrar o ponto de origem e destino, e selecionar um intervalo de datas.<br /> Exemplos de filtros:<br />Fortaleza - Tabuleiro do Norte, entre os dias 1 e 15 de dezembro de 2021

- podem verificar a disponibilidade de assentos para uma viagem<br />
- podem vender uma passagem (reservar um assento) de uma das viagens<br/>
  caso não hajam assentos disponíveis, não deve-se permitir a compra do bilhete<br />
- Todo o acesso do usuário da companhia deve estar limitado somente aos dados da própria companhia. os funcionários da empresa A não devem acessar dados da empresa B.

#### Usuários passageiros:

- poderão se cadastrar no sistema.
- Passageiros podem consultar as viagens disponíveis para esta semana. Ele deverá filtrar o ponto de origem e destino, e poderá selecionar um intervalo de datas.<br /> Exemplos de filtros:<br/>
  Fortaleza - Tabuleiro do Norte, entre os dias 1 e 15 de dezembro de 2021
- podem comprar uma passagem (reservar um assento) de uma das viagens<br>

##### Obvervações:

##### comprar bilhete significa reservar um assento, ou seja, debitar a quantidade de assentos disponíveis na viagem. Não prevemos um nenhum modelo de pagamento ou numeração de cadeiras.
